import { Component, OnInit } from '@angular/core';
import { Upload } from '../models/upload.model';
import { UploadService } from '../services/upload.service'
import { GalleryService } from '../services/gallery.service';
import { Gallery } from '../models/gallery.model';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  files: FileList;
  upload: Upload;
  galleries: Gallery[];
  addingImages: boolean;

  constructor(private uploadService: UploadService, private galleryService: GalleryService, private imageService: ImageService) { 
    this.galleryService.getGalleries().subscribe(data => {
      this.galleries = data});
  }

  OnInit() {
    this.addingImages = false;
  }

  toggleAddingImages() {
    if(!this.addingImages) {
      this.addingImages = true;
    } else {
      this.addingImages = false;
    }

  }

  addGallery(galleryName: string) {
    const newGallery = new Gallery(galleryName);
    this.galleryService.addGallery(newGallery);
  }

  deleteGallery(galleryToDelete: Gallery){
    this.imageService.deleteGallery(galleryToDelete.name.toLowerCase());
    this.galleryService.deleteGallery(galleryToDelete);
  }

  handleFiles(event){
    this.files = event.target.files
  }

  uploadFiles(title: string, description: string, gallery: string){
    this.uploadService.setUploadPath(gallery.toLowerCase());
    const filesToUpload = this.files;
      this.upload = new Upload(filesToUpload[0]);
      this.upload.title = title;
      this.upload.description = description;
      this.upload.gallery = gallery;
      this.uploadService.uploadFiles(this.upload);
  }

}
