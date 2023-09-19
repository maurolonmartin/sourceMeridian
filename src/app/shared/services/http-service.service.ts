import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Breed, DogBreed, DogBreedsResult } from '../interfaces/breed';

function mapResult(results: DogBreedsResult): DogBreed[] {
  return Object.keys(results.message).map((key) => ({
    breed: key,
    subTypes: results.message[key],
  }))
}

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  apiURl = 'https://dog.ceo/api'

  constructor(private http: HttpClient) { }

  getAllBreeds(): Observable<DogBreed[]> {
    const configUrl = `${this.apiURl}/breeds/list/all`;
    return this.http.get<any>(configUrl).pipe(map(mapResult));
  }

  getBreed(breed: string, random?: boolean): Observable<any> {
    let configUrl = ''
    if (random) {
      configUrl = `${this.apiURl}/breed/${breed}/images/ramdom`;
    } else {
      configUrl = `${this.apiURl}/breed/${breed}/images`;
    }
    return this.http.get<any>(configUrl);
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

