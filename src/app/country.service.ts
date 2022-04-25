import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private urlCountries = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.urlCountries);
  }
}
