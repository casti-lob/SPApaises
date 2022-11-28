import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/searchCountry.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor( private http: HttpClient) { 
    this.results = JSON.parse(localStorage.getItem("paises")!)|| [];
  }
  public results:Country[]=[

  ]

  private url:string = "https://restcountries.com/v3.1/name/"

  busquedaPais(query:string){
    
    localStorage.setItem('result', JSON.stringify(this.results))
    this.http.get<Country[]>(`${this.url}${query}`)
    .subscribe((resp)=>this.results=resp)
  }
}
