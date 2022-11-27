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

  get searchCountry():Country[]{
    console.log(this.paisService.results)
    return this.paisService.results
  }
}
