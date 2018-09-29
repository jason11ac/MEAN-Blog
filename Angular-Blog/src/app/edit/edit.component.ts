import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewContainerData } from '@angular/core/src/view';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { Post, BlogService } from '../blog.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {

  post: Post;
  postid: number;

  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService, private router: Router ) {
    this.activatedRoute.params.subscribe(() => this.getPost());
  }

  ngOnInit() {}

  getPost(): void {
    const postid = +this.activatedRoute.snapshot.paramMap.get('id');
    this.post = this.blogService.getPost(postid);
  }

  newPost() {
    this.post = this.blogService.newPost();
    if (this.post == null) {
      this.router.navigateByUrl('/');
    }
  }

  @HostListener('window:beforeunload')
  updatePost() {
    this.blogService.updatePost(this.post);
  }

  delete() {
    const postid = +this.activatedRoute.snapshot.paramMap.get('id');
    this.blogService.deletePost(postid);
  }
}
