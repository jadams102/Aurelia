import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { BlogPost } from '../models/blog-post.model';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {

  constructor(private postService: BlogPostService) { }

  ngOnInit() {
  }

  submitPost(title: string, body: string) {
    const date = new Date().toDateString()
    let newPost = new BlogPost(title, body, date)
    this.postService.addPost(newPost);
  }
}
