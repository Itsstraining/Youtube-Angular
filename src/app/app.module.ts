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
<<<<<<< HEAD
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
=======
<<<<<<< HEAD
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
=======
>>>>>>> 0f16afb16a6688394764cbaa15fef2306e8db5bc

//Material
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

>>>>>>> 5035b5f7c21f268aff3b872e887ff68cc6f19a86

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { AuthenticationService } from './services/authentication.service';
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    MatCardModule,
    MatTabsModule,
=======
<<<<<<< HEAD
<<<<<<< HEAD
    MatCardModule,
    MatTabsModule,
=======
=======
    //Material

    MatTooltipModule,
    
>>>>>>> d869e43737a5ec68038f6a49ca20211e4402e436

>>>>>>> 0f16afb16a6688394764cbaa15fef2306e8db5bc
>>>>>>> 5035b5f7c21f268aff3b872e887ff68cc6f19a86
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
    MatMenuModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule
  ],

  providers: [],
  bootstrap: [AppComponent],
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  entryComponents: [LoginComponent]

>>>>>>> 0f16afb16a6688394764cbaa15fef2306e8db5bc
>>>>>>> 5035b5f7c21f268aff3b872e887ff68cc6f19a86
})
export class AppModule {


}
