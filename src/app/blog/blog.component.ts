import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../services/blog-post.service';
import { Router } from '@angular/router';
import { BlogPost } from '../models/blog-post.model';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: BlogPost[];
  user: Observable<firebase.User>

  constructor(private authService: AuthenticationService, private postService: BlogPostService, private router: Router) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data.reverse();
    });
    this.user = this.authService.authUser();
  }

  goToDetailPage(clickedPost) {
    this.router.navigate(['blog', clickedPost.$key]);
  }

  deletePost(post) {
    this.postService.deletePost(post);
  }
}
