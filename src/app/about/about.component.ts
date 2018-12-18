import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  body;
  updatingAbout = false;


  constructor(private content: ContentService) { }

  ngOnInit() {
    this.body = this.content.getContent().subscribe(data => {
      this.body = data});
      console.log(this.body)
  }

  updateAbout(localContent) {
    this.content.updateContent(localContent);
  }

  toggleForm() {
    if (this.updatingAbout) {
      this.updatingAbout = false;
    } else {
      this.updatingAbout = true;
    }
  }

}
