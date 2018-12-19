import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  body;
  updatingPricing = false;
  user: Observable<firebase.User>

  constructor(private authService: AuthenticationService, private content: ContentService) { }

  ngOnInit() {
    this.body = this.content.getContent().subscribe(data => {
      this.body = data
    });
    this.user = this.authService.authUser();
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
