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
    console.log(this.dogBreeds$)
  }

  getBreed(event$: DogBreed): void {
    this.httpSvc.getBreed(event$.breed, false).subscribe(response => {
      if (response.status === 'success') {
        this.selectedBreed = event$.breed;
        this.urlsToShow = this.obtainRandomElements(response.message)
          .subscribe(randomElements => {
            this.urlsToShow = randomElements;
            this.urlsToShowInCard = this.urlsToShow;
          },
            error => {
              console.error('Error:', error);
            });
      }
    });
  }

  obtainRandomElements(array: any[]): Observable<any[]> {
    return from(array).pipe(
      concatMap(value => from([value]).pipe(take(1))),
      toArray(),
      concatMap(array => from(array).pipe(take(9))),
      toArray()
    );
  }

}
