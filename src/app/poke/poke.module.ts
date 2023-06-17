import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokelistComponent } from './pokelist/pokelist.component';



@NgModule({
  declarations: [
    PokelistComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokelistComponent
  ]
})
export class PokeModule { }
