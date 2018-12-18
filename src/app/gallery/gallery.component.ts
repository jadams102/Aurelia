import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { GalleryService } from '../services/gallery.service';
import { Upload } from '../models/upload.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  galleries: any;

  constructor( private galleryService: GalleryService, private router: Router) {}

  ngOnInit() {
    this.galleries = this.galleryService.getGalleries().subscribe(data => {
      this.galleries = data;
    });
  }

  goToDetailPage(gallery) {
    this.router.navigate(['Gallery', gallery]);
  }
}
