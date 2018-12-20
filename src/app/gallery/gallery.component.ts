import { Component, OnInit, OnChanges } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { GalleryService } from '../services/gallery.service';
import { Upload } from '../models/upload.model';
import { Router } from '@angular/router';
import { ImageService } from '../services/image.service';
import { Gallery } from '../models/gallery.model';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {
  user: Observable<firebase.User>


  galleries: any;

  constructor(private authService: AuthenticationService, private galleryService: GalleryService, private router: Router, private imageService: ImageService) {}

  ngOnInit() {
    this.galleries = this.galleryService.getGalleries().subscribe(data => {
      this.galleries = data;
    });
    this.user = this.authService.authUser();
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
    this.router.navigate(['gallery', gallery]);
  }
}
