import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  
})
export class SearchComponent implements OnInit {

  constructor(private paisService: PaisesService) { }

  ngOnInit(): void {
  }
  query: string="";
  buscarPais(){
    
    this.paisService.busquedaPais(this.query)
    this.query="";
  }
}
