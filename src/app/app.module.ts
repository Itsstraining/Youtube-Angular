import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RegisterComponent } from './components/nav-bar/register/register.component';
import { LoginComponent } from './components/nav-bar/login/login.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HomeComponent } from './components/home/home.component';
import { VideoHomeComponent } from './components/home/video-home/video-home.component';
import { TrendingComponent } from './components/trending/trending.component';
import { VideoTrendingComponent } from './components/trending/video-trending/video-trending.component';
import { TrendingCategoriesComponent } from './components/trending/trending-categories/trending-categories.component';
import { SubcriptionsComponent } from './components/subcriptions/subcriptions.component';
import { LibraryComponent } from './components/library/library.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule,FormControl } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { LibraryloginComponent } from './components/library/librarylogin/librarylogin.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    SideBarComponent,
    HomeComponent,
    VideoHomeComponent,
    TrendingComponent,
    VideoTrendingComponent,
    TrendingCategoriesComponent,
    SubcriptionsComponent,
    LibraryComponent,
    LibraryloginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //Material

    MatTooltipModule,
    

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatSidenavModule,
    MatGridListModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]

})
export class AppModule { }
