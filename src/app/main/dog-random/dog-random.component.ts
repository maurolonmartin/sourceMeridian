import { Component } from '@angular/core';
import { DogService } from '../../shared/services/dogService.service';

@Component({
  selector: 'app-dog-random',
  template: `
    <div class="container">
      <h1>Presiona el boton para ver una raza al azar y conocer su nombre</h1>
      <div class="example-button-row">
          <button mat-raised-button (click)="searchRandomBreed()">Buscar</button>
      </div>
      <div *ngIf="searched">
          <app-dog-card [url]="responseFromApi" [breed]="breed"></app-dog-card>
      </div>
    </div>
  `,
})
export class DogRandomComponent {

  searched = false;
  responseFromApi: any;
  breed = '';


  constructor(private dogSvc: DogService) { }

  searchRandomBreed() {
    this.dogSvc.getRamdonBreed().subscribe(response => {
      if (response.status === 'success') {
        this.responseFromApi = response.message;
      }

      const beedCutted = this.responseFromApi.match(/\/breeds\/([^/]+)/);

      if (beedCutted) {
        this.breed = beedCutted[1];
      } else {
        console.log("No se encontró la parte deseada en la URL.");
      }

      this.searched = true;
    })
  }

}
