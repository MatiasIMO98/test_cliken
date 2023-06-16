import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaPaginadaComponent } from '../tabla-paginada/tabla-paginada.component';



@NgModule({
  declarations: [TablaPaginadaComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TablaPaginadaComponent
  ]
})
export class PokeModule { }
