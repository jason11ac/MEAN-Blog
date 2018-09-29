import { Component, OnInit, Injectable } from '@angular/core';

import { Post, BlogService } from '../blog.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  posts: Post[] = [];
  selectedPost: Post;

  nextPostId: number;


  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.posts = this.blogService.getPosts();
    this.nextPostId = this.blogService.getNextPostId();
  }

  onSelect(post: Post): void {
    this.selectedPost = post;
  }

  newPost() {
    this.selectedPost = this.blogService.newPost();
    this.nextPostId = this.blogService.getNextPostId(); // Added
  }

}
