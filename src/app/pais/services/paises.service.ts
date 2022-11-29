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
  private _query: string="";
  private _error: boolean=false;
  private url:string = "https://restcountries.com/v3.1/name/"
  
  get badQuery():string{
    return this._query;
  }
  get error():boolean {
    return this._error;
  }

  busquedaPais(query:string){
    this._query=query;
    
    this.http.get<Country[]>(`${this.url}${this._query}`)
    .subscribe({
      next: (resp)=>{
        this.results=resp;
      },
      error: (err)=>{
        this._error=true;
      }
    })
  }
}
