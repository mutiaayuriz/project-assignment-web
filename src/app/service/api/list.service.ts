import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interface/list.interface';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private api = "https://restcountries.com/v3.1";
  constructor(private http: HttpClient) {}

  getAllCountryList(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.api}`+'/all?fields=name,flags,languages,capital,region,codes,idd');
  }

  getCountryByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.api}`+'/name/'+name);
  }
}
