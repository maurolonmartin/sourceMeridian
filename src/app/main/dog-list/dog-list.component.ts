import { Component, OnInit } from '@angular/core';
import { Observable, concatMap, from, map, startWith, take, toArray } from 'rxjs';
import { DogBreed } from 'src/app/shared/interfaces/breed';
import { DogService } from 'src/app/shared/services/dogService.service';

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

  constructor(private readonly dogSvc: DogService) { }

  ngOnInit(): void {
    this.dogBreeds$ = this.dogSvc.getAllBreeds();
  }

  getBreed(event$: DogBreed): void {
    this.dogSvc.getBreed(event$.breed, false).subscribe(response => {
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
