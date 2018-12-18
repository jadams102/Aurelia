import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  body;
  updatingPricing = false;

  constructor(private content: ContentService) { }

  ngOnInit() {
    this.body = this.content.getContent().subscribe(data => {
      this.body = data});
      console.log(this.body)
  }

  updateVoyages(localContent) {
    this.content.updateContent(localContent);
    this.toggleForm();
  }

  toggleForm() {
    if (this.updatingPricing) {
      this.updatingPricing = false;
    } else {
      this.updatingPricing = true;
    }
  }
}
