import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Upload } from '../models/upload.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.css']
})
export class GalleryDetailComponent implements OnInit {
  galleryName: string;
  images: FirebaseListObservable<any[]>;

  constructor(private imageService: ImageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.galleryName = urlParameters['name'];
    });
    this.imageService.setGallery(this.galleryName.toLowerCase());
    this.images = this.imageService.getGallery()
  }

  goToImageDetail(clickedImage) {
    this.router.navigate(['Gallery', clickedImage.gallery, clickedImage.$key]);
  }
}
