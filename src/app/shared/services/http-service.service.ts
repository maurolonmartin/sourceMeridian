import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Breed } from '../interfaces/breed';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  apiURl = 'https://dog.ceo/api'

  constructor(private http: HttpClient) { }

  getAllBreeds(): Observable<Breed> {
    const configUrl = `${this.apiURl}/breeds/list/all`;
    return this.http.get<Breed>(configUrl);
  }

  getBreed(breed: string, random?: boolean): Observable<Breed> {
    let configUrl = ''
    if (random) {
      configUrl = `${this.apiURl}/${breed}/images/ramdom`;
    } else {
      configUrl = `${this.apiURl}/${breed}/images`;
    }
    return this.http.get<Breed>(configUrl);
  }

  getSubBreed(breed: string, subBreed: string, random?: boolean): Observable<Breed> {
    let configUrl = ''
    if (random) {
      configUrl = `${this.apiURl}/${breed}/${subBreed}/images/random`;
    } else {
      configUrl = `${this.apiURl}/${breed}/${subBreed}/images`;
    }
    return this.http.get<Breed>(configUrl);
  }
} 
