import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Instructions ---->
// Replace configPlaceholder with environment.firebase
// import { environment } from '../environments/environment';
// import configPlaceholder from './env';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';

const config = {
  apiKey: "AIzaSyCs2aTS6Kd5Wm90AUUrpF9mJ_RpVUilRCk",
  authDomain: "chat-firebase-a97a5.firebaseapp.com",
  databaseURL: "https://chat-firebase-a97a5.firebaseio.com",
  projectId: "chat-firebase-a97a5",
  storageBucket: "chat-firebase-a97a5.appspot.com",
  messagingSenderId: "455036652774"
};

@NgModule({
  declarations: [AppComponent, ChatComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
