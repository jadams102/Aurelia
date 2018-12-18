import { Injectable, Inject } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class BlogPostService {
    blogPosts: FirebaseListObservable<any[]>;

    constructor(private database: AngularFireDatabase) {
        this.blogPosts = database.list('blogPosts')
    }

    getPosts() {
        return this.blogPosts;
    }

    addPost(newPost: BlogPost) {
        this.blogPosts.push(newPost);
    }

    getPostById(postId: string) {
        return this.database.object('blogPosts/' + postId)
    }

    updatePost(localUpdatedPost) {
        const postEntryInFirebase = this.getPostById(localUpdatedPost.$key);
        postEntryInFirebase.update({title: localUpdatedPost.title,
                                    body: localUpdatedPost.body,
                                    date: localUpdatedPost.date})
    }

    deletePost(localPost) {
        const postEntryInFirebase = this.getPostById(localPost.$key);
        postEntryInFirebase.remove();
    }
}