import { Component, OnInit, OnChanges } from '@angular/core';
import { ContentService } from '../services/content.service';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnChanges {
  body;
  updatingAbout = false;
  user: Observable<firebase.User>

  constructor(private router: Router, private authService: AuthenticationService, private content: ContentService) { }

  ngOnInit() {
    this.body = this.content.getContent()
    this.user = this.authService.authUser();
  }

  ngOnChanges() {
    this.body = this.content.getContent().subscribe(data => {
      this.body = data
    });
  }

  navToContact() {
    this.router.navigate(['contact'])
  }


  updateAbout(localContent) {
    this.content.updateContent(localContent);
    this.updatingAbout = false;
    alert('Saved')
  }

  toggleForm() {
    if (this.updatingAbout) {
      this.updatingAbout = false;
    } else {
      this.updatingAbout = true;
    }
  }

}
