import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  constructor(private route: ActivatedRoute, private paisService:PaisesService) {
    console.log(route.snapshot.params['id']);
   }

  ngOnInit(): void {
  }
  get searchCountry(){
    
    return this.paisService.results
  }
}
