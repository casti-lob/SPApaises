import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/searchCountry.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor( private http: HttpClient) { 
    
  }
 
 
 
  private url:string = "https://restcountries.com/v3.1/"
  
  

  busquedaPais(query:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.url}name/${query}`)
  }

  busquedaCapital(query:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.url}capital/${query}`)
  }

  country(code:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.url}alpha/${code}`)
  }
}
