import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/searchCountry.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {
  code:string=''
  pais:any;

  constructor(private route: ActivatedRoute, private paisService:PaisesService, private activeRoute:ActivatedRoute) {
    console.log(route.snapshot.params['id']);
    
   }
   
  ngOnInit(): void {
    this.code=this.activeRoute.snapshot.params['id'];
    this.paisService.country(this.code)
    .subscribe({
      next: (resp)=> {
        this.pais=resp[0]
      },
      error: (error)=> console.log(error)
    })
  }
 
}
