import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private router: Router){
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
       return false;
    }

    this.router.events.subscribe((evt) => {
       if (evt instanceof NavigationEnd) {
          // trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
          // if you need to scroll back to top, here is the right place
          window.scrollTo(0, 0);
       }
   });

  }

  toBlog() {
    this.router.navigate(['Blog'])
    window.location.reload();
  }

  toPricing() {
    this.router.navigate(['Pricing'])
    window.location.reload();
  }

  toGallery() {
    this.router.navigate(['Gallery'])
    window.location.reload();
  }

  toAboutUs() {
    this.router.navigate(['About'])
    window.location.reload();
  }

  toContact() {
    this.router.navigate(['Contact'])
    window.location.reload();
  }

}
