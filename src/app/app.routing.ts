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
import { AuthGuard } from './services/authguard.service';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'gallery',
        component: GalleryComponent
    },
    {
        path: 'gallery/:name',
        component: GalleryDetailComponent
    },
    {
        path: 'gallery/:name/:id',
        component: GalleryImageDetailComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'pricing',
        component: PricingComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'blog/:id',
        component: BlogDetailComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'LogIn',
        component: LoginComponent
    }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
