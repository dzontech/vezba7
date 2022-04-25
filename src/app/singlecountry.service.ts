import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SingleCountry } from './models/singlecountry';


@Injectable({
  providedIn: 'root'
})
export class SinglecountryService {

  private urlSingleCountry = 'https://restcountries.com/v3.1/name/'

  constructor(private http: HttpClient) { }

  getCountryByName(common: string): Observable<SingleCountry[]> {
    return this.http.get<SingleCountry[]>(this.urlSingleCountry+common)
  }
}
