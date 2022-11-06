import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cafe } from './Cafe';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class CafesService {
  private apiUrl = enviroment.CoffeeApiUrl;

  constructor(private http: HttpClient) { }

  getCoffees(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(this.apiUrl);
  }
}
