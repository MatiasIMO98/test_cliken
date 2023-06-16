import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonApiService } from '../pokemon-api.service';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-tabla-paginada',
  templateUrl: './tabla-paginada.component.html',
  styleUrls: ['./tabla-paginada.component.css']
})
export class TablaPaginadaComponent {

  constructor(private servicio: PokemonApiService) { }

  // datos: any[] = [];
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngOnInit(): void {
  //   this.servicio.getDatos().subscribe(response => {
  //     this.datos = response;
  //     this.datos.paginator = this.paginator;
  //   });
  // }
  
}
