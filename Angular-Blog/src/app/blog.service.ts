import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';

import 'rxjs/add/operator/catch';
import { decode } from 'punycode';
import * as jwt from 'jsonwebtoken';
import { Window } from 'selenium-webdriver';
import { window } from 'rxjs/operators/window';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable()
export class BlogService {
  private posts: Post[] = [];
  posts_db: any;

  nextPostId: number;
  maxPostId: number;

  constructor(private http: HttpClient, private router: Router) {
    this.fetchPosts();
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      this.router.navigateByUrl('/');
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      // this.router.navigateByUrl('/');
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
        this.router.navigateByUrl('/');
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }
}

  fetchPosts(): void {
    const user = this.getUsername();
    const fetch_posts_url = 'http://localhost:3000/api/' + user;

    this.http.get(fetch_posts_url).subscribe(data => {
      this.posts_db = data;
      for (let i = 0; i < this.posts_db.length; i++) {
        this.posts.push(this.posts_db[i]);
      }

      this.sortArray();
      this.maxPostId = 0;
      for (let k = 0; k < this.posts.length; k++) {
        if (this.posts[k].postid > this.maxPostId) {
          this.maxPostId = this.posts[k].postid;
        }
      }
      this.nextPostId = this.maxPostId + 1;
    },
    error => {
      if (error.status === 401) {
        console.log('THIS IS A BAD REQUEST');
        alert('Please login to interact with your posts');
        this.router.navigateByUrl('/');
      }
    }
  );
  }

  sortArray(): void {
    function compare(a, b) {
      let comparison = 0;
      if (a.postid > b.postid) {
        comparison = 1;
      } else if (a.postid < b.postid) {
        comparison = -1;
      }
      return comparison;
    }
    this.posts.sort(compare);
  }

  getNextPostId(): number {
    return this.nextPostId;
  }

  getPosts(): Post[] {
    return this.posts;
  }

  getPost(id: number): Post {
    for (let k = 0; k < this.posts.length; k++) {
      if (this.posts[k].postid === id) {
        return this.posts[k];
      }
    }
  }

  getUsername(): string {
    let token;
    const name = 'jwt=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for ( let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            token = c.substring(name.length, c.length);
        }
    }
    if (token == null) {
      return null;
    }
    try {
      if (!jwt.verify(token, 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c')) {
        return null;
      }
    } catch (err) {
      return null;
    }
    const decoded = jwt.decode(token, {complete: true});
    return decoded.payload.usr;
  }


  newPost(): Post {
    this.maxPostId = this.maxPostId + 1;
    this.nextPostId = this.maxPostId;
    const newPost = new Post();
    newPost.postid = this.maxPostId;

    const username = this.getUsername();
    if (username == null) {
      return null;
    }
    newPost.username = username;
    newPost.created = (new Date).getTime();
    newPost.modified = (new Date).getTime();
    newPost.title = '';
    newPost.body = '';
    this.posts.push(newPost);

    this.addPost(newPost, username).subscribe(
      data => { console.log('VALUE RECEIVED: ' + data); },
      error => { console.log(error); }
    );
    return newPost;
  }
  addPost(post: Post, user: string): Observable<Post> {
    const create_post_url = 'http://localhost:3000/api/' + user + '/' + post.postid;
    return this.http.post(create_post_url, post, httpOptions)
      .catch(this.handleError);
  }


  updatePost(post: Post): void {
    const updatedPost = new Post();
    const index = this.posts.indexOf(post);
    updatedPost.postid = post.postid;
    updatedPost.created = post.created;
    updatedPost.modified = (new Date).getTime();
    updatedPost.title = post.title;
    updatedPost.body = post.body;
    this.posts[index] = updatedPost;
    this.update_post(updatedPost).subscribe(
      data => { console.log('VALUE RECEIVED: ' + data); },
      error => { console.log('Post updated successfully'); }
    );
  }
  update_post(post: Post): Observable<Post> {
    const user = this.getUsername();
    const update_post_url = 'http://localhost:3000/api/' + user + '/' + post.postid;
    return this.http.put(update_post_url, post, httpOptions)
      .catch(this.handleError);
  }



  deletePost(id: number): void {
    const user = this.getUsername();
    const delete_post_url = 'http://localhost:3000/api/' + user + '/' + id;
    const deletePost = this.getPost(id);
    const index = this.posts.indexOf(deletePost);
    if (index >= 0) {
      this.posts.splice(index, 1);
    }
    this.http.delete(delete_post_url, httpOptions)
      .subscribe((data) => { console.log(data); });
  }
}

export class Post {
  postid: number;
  username: string;
  created: number;
  modified: number;
  title: string;
  body: string;
}
