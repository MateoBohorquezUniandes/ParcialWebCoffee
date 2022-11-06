import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cafe } from './Cafe';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CafesService {
  private apiUrl: string = environment.CoffeeApiUrl;

  constructor(private http: HttpClient) { }

  getCoffees(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(this.apiUrl);
  }
}
