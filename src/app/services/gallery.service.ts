import { Injectable, Inject } from '@angular/core';
import { Gallery } from '../models/gallery.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GalleryService {
    galleries: FirebaseListObservable<any>;

    constructor(private database: AngularFireDatabase) {
        this.galleries = database.list('galleryNames')
    }

    getGalleries() {
        return this.galleries;
    }

    addGallery(newGallery: Gallery) {
        this.galleries.push(newGallery);
    }

    getGalleryById(galleryId: string) {
        return this.database.object('galleryNames/' + galleryId)
    }

    deleteGallery(localGallery) {
        const galleryEntryInFirebase = this.getGalleryById(localGallery.$key);
        galleryEntryInFirebase.remove();
    }
}