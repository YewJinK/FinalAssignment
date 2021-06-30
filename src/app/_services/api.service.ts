import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ANGULAR_DATA, TEMP_DATA } from '../_services/data';

const API_URL = 'http://localhost:1337/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    // private http: HttpClient
    ) { }

  getAngularConcepts():Observable<any>{
    return of(ANGULAR_DATA);
    // Will be replaced by actual API call when available
    //return this.http.get(API_URL + 'ng', { responseType: 'text' });
  }

  getTemperatureData():Observable<any>{
    return of(TEMP_DATA);
    // Will be replaced by actual API call when available
    //return this.http.get(API_URL + 'temp', { responseType: 'text' });
  }
}
