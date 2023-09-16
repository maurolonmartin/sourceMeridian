import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Breed } from '../interfaces/breed';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getBreds(): Observable<Breed> {
    const configUrl = 'https://dog.ceo/api/breeds/list/all';
    return this.http.get<Breed>(configUrl);
  }
} 
