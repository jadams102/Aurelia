import { Component, OnInit } from '@angular/core';
import { Gallery } from '../models/gallery.model';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-gallery-add',
  templateUrl: './gallery-add.component.html',
  styleUrls: ['./gallery-add.component.css']
})
export class GalleryAddComponent {

  galleries: Gallery[];
  addingGallery: boolean;

  constructor(private galleryService: GalleryService) { 
    this.galleryService.getGalleries().subscribe(data => {
      this.galleries = data});
  }

  addGallery(galleryName: string) {
    const newGallery = new Gallery(galleryName);
    this.galleryService.addGallery(newGallery);
  }

}
