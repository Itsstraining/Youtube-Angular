import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
=======
import { LibraryComponent } from './components/library/library.component';

const routes: Routes = [
  {
    path:'library' , component: LibraryComponent, 
>>>>>>> 0f16afb16a6688394764cbaa15fef2306e8db5bc
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
