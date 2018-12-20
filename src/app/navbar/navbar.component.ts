import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>

  constructor(private authService: AuthenticationService, private router: Router){
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

  ngOnInit() {
    this.user = this.authService.authUser();
  }

  logOut() {
    this.authService.logout().then(onResolve => this.router.navigate['/']);
  }

  toBlog() {
    this.router.navigate(['blog'])
    window.location.reload();
  }

  toPricing() {
    this.router.navigate(['pricing'])
    window.location.reload();
  }

  toGallery() {
    this.router.navigate(['gallery'])
    window.location.reload();
  }

  toAboutUs() {
    this.router.navigate(['about'])
    window.location.reload();
  }

  toContact() {
    this.router.navigate(['contact'])
    window.location.reload();
  }

}
