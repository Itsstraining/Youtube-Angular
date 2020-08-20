import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryComponent } from './components/library/library.component';
import { TrendingComponent } from './components/trending/trending.component';
import {VideoTrendingComponent} from './components/trending/video-trending/video-trending.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  },
  {
    path:'library' , component: LibraryComponent, 

  },
  {
  path:'trending',component:TrendingComponent,
  children: [
    {
      path: ':video-trending',
      component: VideoTrendingComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
