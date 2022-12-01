import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/searchCountry.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent implements OnInit {

  constructor( private paisService: PaisesService) { }

  ngOnInit(): void {
  }
  error:boolean=false;
  textError:string="";
 
  result:Country[]=[];
  
  busquedaCapital(query:string){
    
    this.textError=query;
    this.paisService.busquedaCapital(query)
    .subscribe({
      next:(resp)=> {
        this.result=resp
        this.error=false;
      },
      error:(error)=>{
        this.error=true;
        this.result=[]
      }
    })
    query=""
  }
  }
