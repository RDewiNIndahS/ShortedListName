import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortByNameComponent } from './short-by-name/short-by-name.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card'; 
import {MatGridListModule} from '@angular/material/grid-list';





@NgModule({
  declarations: [
    AppComponent,
    ShortByNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    GridModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
