import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


////Route Components ////
import { IndexComponent } from './index/index.component';



//////Element Components//////


////SERVICES///////
import { GlobalService } from './services/global.service';


import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoaderComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
