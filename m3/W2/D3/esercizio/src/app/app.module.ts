import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavberComponent } from './navber/navber.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ActivePostComponent } from './active-post/active-post.component';
import { InactivePostComponent } from './inactive-post/inactive-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavberComponent,
    NavbarComponent,
    HomeComponent,
    ActivePostComponent,
    InactivePostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
