import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from "ngx-pagination";

import { AppComponent } from './app.component';
import { TablaPaginadaComponent } from './tabla-paginada/tabla-paginada.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TablaPaginadaComponent
  ],
  imports: [
    BrowserModule,
    MatPaginatorModule,
    NgxPaginationModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
