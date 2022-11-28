import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/searchCountry.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor( private http: HttpClient) { 
    
  }
  public results:Country[]=[

  ]

  private url:string = "https://restcountries.com/v3.1/name/"

  busquedaPais(query:string){
    
    
    this.http.get<Country[]>(`${this.url}${query}`)
    .subscribe({
      next: (resp)=>{
        this.results=resp;
      },
      error: (err)=>{
        
      }
    })
  }
}
