import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { config }  from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { UploadComponent } from './upload/upload.component';
import { UploadService } from './services/upload.service';
import { BlogPostService } from './services/blog-post.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './services/authguard.service'
import { GalleryService } from './services/gallery.service';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ContentService } from './services/content.service';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import { ImageService } from './services/image.service';
import { GalleryImageDetailComponent } from './gallery-image-detail/gallery-image-detail.component';

export const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  storageBucket: config.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PricingComponent,
    GalleryComponent,
    BlogComponent,
    AdminComponent,
    LoginComponent,
    BlogAddComponent,
    UploadComponent,
    BlogEditComponent,
    BlogDetailComponent,
    GalleryDetailComponent,
    GalleryImageDetailComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [ AuthGuard, { provide: LocationStrategy, useClass: HashLocationStrategy }, AngularFireAuth, AuthenticationService, ContentService, UploadService, BlogPostService, GalleryService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
