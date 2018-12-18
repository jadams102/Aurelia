import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { GalleryImage } from '../models/gallery-image.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Upload } from '../models/upload.model';
import * as  firebase from 'firebase';

@Injectable()
export class UploadService {

  public basePath = '/galleries';

  constructor(private ngFire: AngularFireModule, private db: AngularFireDatabase ) { }

  setUploadPath(galleryName: string) {
    this.basePath = '/galleries/' + galleryName;
    console.log(this.basePath);
  }

  uploadFiles(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    (snapshot) => {
      upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
      console.log(upload.progress);
    },

    (error) => {
      console.log(error);
    },

    ():any => {
      upload.url = uploadTask.snapshot.downloadURL;
      upload.title = upload.file.name;
      this.saveFileData(upload);
    }
  );
}

deleteFile(name) {
  const storageRef = firebase.storage().ref();
  const imgRef = storageRef.child( this.basePath + '/' + name);
  imgRef.delete()
}

private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
    console.log("Files Saved: " + upload.url)
  }
}