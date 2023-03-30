import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Flight} from "../model/flight.model";


@Injectable({
  providedIn: 'root'
})
export class FlightService {

  apiHost: string = 'http://localhost:16177/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {}

  createFlight(flight: any): Observable<any> {
    return this.http.post<any>(this.apiHost + 'api/flight', flight, {headers: this.headers});
  }

  deleteFlight(id: any): Observable<any> {
    return this.http.delete<any>(this.apiHost + 'api/flight/' + id, {headers: this.headers});
  }

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.apiHost + 'api/flight', {headers: this.headers});
  }



}
