import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*

const firebaseConfig = {
  apiKey: "AIzaSyC48jODJ3y2At3V13Uj-dXkOuhU8ejMD3c",
  authDomain: "fitness-app-c722c.firebaseapp.com",
  databaseURL: "https://fitness-app-c722c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fitness-app-c722c",
  storageBucket: "fitness-app-c722c.appspot.com",
  messagingSenderId: "88232428620",
  appId: "1:88232428620:web:b510bfbfa01a65bd7160e9",
  measurementId: "G-534XEE5HK5"
};

*/
