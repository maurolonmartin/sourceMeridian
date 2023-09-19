import { Component, OnInit } from '@angular/core';
import { Observable, concatMap, from, map, startWith, take, toArray } from 'rxjs';
import { DogBreed } from 'src/app/shared/interfaces/breed';
import { HttpServiceService } from 'src/app/shared/services/http-service.service';
import { FormControl } from '@angular/forms';

export interface User {
  name: string;
}

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent implements OnInit {

  dogBreeds$: Observable<DogBreed[]> | undefined;
  selectedBreed: any;
  urlsToShow: any;

  urlsToShowInCard: string[] = [];

  constructor(private readonly httpSvc: HttpServiceService) { }

  ngOnInit(): void {
    this.dogBreeds$ = this.httpSvc.getAllBreeds();
  }

  getBreed(event$: DogBreed): void {

    this.httpSvc.getBreed(event$.breed, false).subscribe(response => {
      if (response.status === 'success') {
        this.selectedBreed = event$.breed;
        this.urlsToShow = this.obtenerElementosAlAzar(response.message)
          .subscribe(elementosAlAzar => {
            this.urlsToShow = elementosAlAzar;
            console.log(this.urlsToShow) // true)
            this.urlsToShowInCard = this.urlsToShow;
            console.log('this.urlsToShow', (this.urlsToShow));
          },
            error => {
              console.error('Error:', error);
            });
      }
    });
  }

  obtenerElementosAlAzar(arreglo: any[]): Observable<any[]> {
    return from(arreglo).pipe(
      concatMap(value => from([value]).pipe(take(1))),
      toArray(),
      concatMap(array => from(array).pipe(take(9))),
      toArray()
    );
  }

  selectPics(urlsArray: any) {
    return from(urlsArray).pipe(concatMap(value => from([value]).pipe(take(1))),
      toArray(),
      concatMap(urlsArray => from(urlsArray).pipe(take(9))),
      toArray()
    ).toPromise()
  }

  // obtenerElementosAlAzar(arreglo: any[]): any[] {
  //   const elementosAlAzar: any[] = [];

  //   // Creamos una copia del arreglo original para no modificarlo directamente
  //   const copiaArreglo = [...arreglo];

  //   // Iteramos 9 veces para obtener 9 elementos al azar
  //   for (let i = 0; i < 9; i++) {
  //     // Generamos un índice aleatorio entre 0 y la longitud actual del arreglo
  //     const indiceAleatorio = Math.floor(Math.random() * copiaArreglo.length);

  //     // Agregamos el elemento correspondiente al índice aleatorio al arreglo resultado
  //     elementosAlAzar.push(copiaArreglo.splice(indiceAleatorio, 1)[0]);
  //   }

  //   return elementosAlAzar;
  // }

}
