import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BlogPost } from '../models/blog-post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: BlogPost[];

  constructor(private postService: BlogPostService, private router: Router) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data.reverse();
    });
  }

  goToDetailPage(clickedPost) {
    this.router.navigate(['Blog', clickedPost.$key]);
  }

  deletePost(post) {
    this.postService.deletePost(post);
  }
}
