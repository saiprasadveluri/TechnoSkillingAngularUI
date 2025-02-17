import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { AppBlogsComponent } from './app-blogs/app-blogs.component';
import { AppGallaryViewComponent } from './app-gallary-view/app-gallary-view.component';

export const routes: Routes = [
    
    {path:'home',component:HomeComponent},
    {path:'team',component:OurTeamComponent},
    {path:'blogcatg',component:AppBlogsComponent},
    {path:'gallary',component:AppGallaryViewComponent},
    {path:"**",redirectTo:'home'},
    
];
