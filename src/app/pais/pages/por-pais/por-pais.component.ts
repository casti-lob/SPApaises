import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/searchCountry.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent implements OnInit {

  constructor( private paisService:PaisesService) { }

  ngOnInit(): void {
  }

  query: string="";
  buscarPais(){
    
    this.paisService.busquedaPais(this.query)
    this.query="";
  }
}
