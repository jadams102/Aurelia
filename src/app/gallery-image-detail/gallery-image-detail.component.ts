import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Upload } from '../models/upload.model';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-gallery-image-detail',
  templateUrl: './gallery-image-detail.component.html',
  styleUrls: ['./gallery-image-detail.component.css']
})
export class GalleryImageDetailComponent implements OnInit {

  constructor(private imageService: ImageService, private route: ActivatedRoute, private router: Router,) { }

  galleryName: string;
  imageKey: string;
  imageToDisplay: Upload;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.galleryName = urlParameters['name']
      this.imageKey = urlParameters['id'];
      console.log(this.galleryName, this.imageKey)
    });
    this.imageService.getImageById(this.galleryName.toLowerCase(), this.imageKey).subscribe( data => {
      this.imageToDisplay = data;
      console.log(this.imageToDisplay)
    });
  }
}
