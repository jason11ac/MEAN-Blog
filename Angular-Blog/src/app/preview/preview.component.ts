import { Component, OnInit, Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Parser, HtmlRenderer } from 'commonmark';
import { Post, BlogService } from '../blog.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  post: Post;
  title: string;
  body: string;

  constructor(private activatedRoute: ActivatedRoute,
              private blogService: BlogService,
              private location: Location) {
    this.activatedRoute.params.subscribe(() => this.getPost());
  }

  ngOnInit() {}

  getPost(): void {
    const postid = +this.activatedRoute.snapshot.paramMap.get('id');
    this.post = this.blogService.getPost(postid);

    const reader = new Parser();
    const writer = new HtmlRenderer();

    const t = reader.parse(this.post.title);
    this.title = writer.render(t);

    const b = reader.parse(this.post.body);
    this.body = writer.render(b);
  }

  goBack() {
    this.location.back();
  }
}
