import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import your components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PhotosComponent } from './photos/photos.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'photos', component: PhotosComponent },
    { path: 'reviews', component: ReviewsComponent },
    { path: 'contact', component: ContactComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],  // Set up the router with the defined routes
    exports: [RouterModule]  // Export RouterModule for use in the rest of the app
})
export class AppRoutingModule { }
