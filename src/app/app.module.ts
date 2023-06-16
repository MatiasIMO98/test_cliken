import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from "ngx-pagination";

import { AppComponent } from './app.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokeModule } from './poke/poke.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PokeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
