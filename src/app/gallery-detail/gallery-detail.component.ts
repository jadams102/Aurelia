import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Upload } from '../models/upload.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.css']
})

export class GalleryDetailComponent implements OnInit {
  galleryName: string;
  images: FirebaseListObservable<any[]>;
  user: Observable<firebase.User>


  constructor(private authService: AuthenticationService, private imageService: ImageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.galleryName = urlParameters['name'];
    });
    this.imageService.setGallery(this.galleryName.toLowerCase());
    this.images = this.imageService.getGallery()
    this.user = this.authService.authUser();
  }

  goToImageDetail(clickedImage) {
    this.router.navigate(['gallery', clickedImage.gallery, clickedImage.$key]);
  }

  deleteImage(image) {
    this.imageService.removeImage(image);
  }
}
