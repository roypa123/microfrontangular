import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManuComponent } from './manu/manu.component';
import { EventBusService } from './shared/event-bus.service';


@NgModule({
  declarations: [
    AppComponent,
    ManuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //providers: [EventBusService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
