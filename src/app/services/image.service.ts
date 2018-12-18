import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'firebase/storage';
import { Upload } from '../models/upload.model';
import { UploadService } from './upload.service';

@Injectable()
export class ImageService {
  private uid: string;
  gallery: FirebaseListObservable<Upload[]>;
  allGalleries: FirebaseListObservable<any[]>;

  constructor(private afAuth: AngularFireAuth, private database: AngularFireDatabase, private uploadService: UploadService) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    });
    this.allGalleries = this.database.list('galleries');
  }

  getGallery(galleryPath: string): FirebaseListObservable<Upload[]> {
    this.gallery = this.database.list('galleries/' + galleryPath);
    return this.gallery;
  }

  getImageById(galleryPath: string, key: string) {
    return this.database.object('galleries/' + galleryPath + '/' + key);
  }

  removeImage(image: Upload) {
    let imageEntry = this.getImageById(image.gallery, image.$key);
    this.uploadService.deleteFile(image.title);
    imageEntry.remove()
  }
}