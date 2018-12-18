import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { LoginComponent } from './login/login.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import { GalleryImageDetailComponent } from './gallery-image-detail/gallery-image-detail.component';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'About',
        component: AboutComponent
    },
    {
        path: 'Gallery',
        component: GalleryComponent
    },
    {
        path: 'Gallery/:name',
        component: GalleryDetailComponent
    },
    {
        path: 'Gallery/:name/:id',
        component: GalleryImageDetailComponent
    },
    {
        path: 'Contact',
        component: ContactComponent
    },
    {
        path: 'Pricing',
        component: PricingComponent
    },
    {
        path: 'Blog',
        component: BlogComponent
    },
    {
        path: 'Blog/:id',
        component: BlogDetailComponent
    },
    {
        path: 'LogIn',
        component: LoginComponent
    }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
