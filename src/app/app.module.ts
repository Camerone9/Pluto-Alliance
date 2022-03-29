import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FirebaseService } from './services/firebase.service';
import { MaterialModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';
import { DeleteInstructionsComponent } from './components/delete-instructions/delete-instructions.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LatestComponent } from './components/latest/latest.component';
import { LoreComponent } from './components/lore/lore.component';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { UtilitiesComponent } from './components/utilities/utilities.component';
import { PartnersComponent } from './components/partners/partners.component';
import { UserComponent } from './components/user/user.component';
import { RightButtonsComponent } from './components/right-buttons/right-buttons.component';
import { TitleComponent } from './components/title/title.component';
import { NgxTwitterWidgetsModule } from 'ngx-twitter-widgets';
import { PaV1Component } from './components/pa-v1/pa-v1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DeleteInstructionsComponent,
    SideNavComponent,
    LatestComponent,
    LoreComponent,
    RoadmapComponent,
    UtilitiesComponent,
    PartnersComponent,
    UserComponent,
    RightButtonsComponent,
    TitleComponent,
    PaV1Component
  ],
  imports: [
    BrowserModule,
    NgxTwitterWidgetsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBmOLJAVq2CF9QMafzcLz1GyPt08BCftRM",
      authDomain: "pluto-alliance.firebaseapp.com",
      projectId: "pluto-alliance",
      storageBucket: "pluto-alliance.appspot.com",
      messagingSenderId: "373544570308",
      appId: "1:373544570308:web:5e895179e27d48d192e891",
      measurementId: "G-M5534KG727"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
