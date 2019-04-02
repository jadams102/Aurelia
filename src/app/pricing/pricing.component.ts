import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  body;
  updatingPricing = false;
  user: Observable<firebase.User>

  constructor(private authService: AuthenticationService, private content: ContentService, private router: Router) { }

  ngOnInit() {
    this.body = this.content.getContent()
    this.user = this.authService.authUser();
  }

  navToContact() {
    this.router.navigate(['contact'])
  }

  updateVoyages(localContent) {
    this.content.updateContent(localContent);
    this.toggleForm();
    window.location.reload();
  }

  toggleForm() {
    if (this.updatingPricing) {
      this.updatingPricing = false;
    } else {
      this.updatingPricing = true;
    }
  }
}
