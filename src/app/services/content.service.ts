import { Injectable, Inject } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class ContentService {
     private content: FirebaseObjectObservable<any>;

    constructor(private database: AngularFireDatabase) {
        this.content = database.object('content');
    }

    getContent() {
        return this.content;
    }

    updateContent(localUpdatedContent) {
        const postEntryInFirebase = this.content;
        postEntryInFirebase.update({about: localUpdatedContent.about,
                                    voyages: localUpdatedContent.voyages})
    }
}