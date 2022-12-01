import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/searchCountry.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent implements OnInit {

  constructor( private paisService:PaisesService ) { }

  ngOnInit(): void {
  }
  //get searchCountry():Country[]{
    
   //return this.paisService;
// }
  error:boolean=false;
  textError:string="";
  
  result:Country[]=[];
  
  buscarPais(query:string){
    this.textError=query;
    this.paisService.busquedaPais(query)
    .subscribe({
      next:(resp)=> {
        this.result= resp
        this.error=false;
      },
      error: (error)=> {
        this.error=true
        this.result=[]
      }
    })
    query="";
  }
}
