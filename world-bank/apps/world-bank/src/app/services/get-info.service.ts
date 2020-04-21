import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetInfoService {

  constructor(private http: HttpClient) {

}

public getRegions(): Observable<any> {
    return this.http.get("http://api.worldbank.org/v2/region/?format=json");
}

public getCountries(code): Observable<any> {
  return this.http.get(`http://api.worldbank.org/v2/region/${code}/country?per_page=1000&format=json`);
}

public getInfoCountry(code): Observable<any> {
  return this.http.get(`http://api.worldbank.org/V2/country/${code}?format=json`);
}

}
