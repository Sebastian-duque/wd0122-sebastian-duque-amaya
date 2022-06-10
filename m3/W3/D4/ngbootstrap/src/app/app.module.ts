import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { NgbdModalComponent, NgbdModalContent } from './modal-test/modal-component';
import { LoingmodalComponent } from './loingmodal/loingmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NgbdModalContent,
    NgbdModalComponent,
    LoingmodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
