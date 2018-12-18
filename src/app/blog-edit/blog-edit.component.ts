import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  @Input() selectedPost;

  constructor(private postService: BlogPostService) {
  }

  ngOnInit() {
  }

  updatePost(postToUpdate) {
    this.postService.updatePost(postToUpdate);
  }
}
