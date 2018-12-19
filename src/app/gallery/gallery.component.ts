import { Component, OnInit, OnChanges } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { GalleryService } from '../services/gallery.service';
import { Upload } from '../models/upload.model';
import { Router } from '@angular/router';
import { ImageService } from '../services/image.service';
import { Gallery } from '../models/gallery.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {

  galleries: any;

  constructor( private galleryService: GalleryService, private router: Router, private imageService: ImageService) {}

  ngOnInit() {
    this.galleries = this.galleryService.getGalleries().subscribe(data => {
      this.galleries = data;
    });
  }

  ngOnChanges() {
      this.galleries = this.galleryService.getGalleries().subscribe(data => {
        this.galleries = data;
      });
  }

  deleteGallery(galleryToDelete: Gallery) {
    if (confirm('Are you sure you want to delete this gallery? (Any remaining image files will need to be deleted from database directly)')) {
      this.galleryService.deleteGallery(galleryToDelete);
      this.imageService.deleteGallery(galleryToDelete.name.toLowerCase());
    }

  }

  goToDetailPage(gallery) {
    this.router.navigate(['Gallery', gallery]);
  }
}
