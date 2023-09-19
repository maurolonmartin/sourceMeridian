import { Component } from '@angular/core';
import { HttpServiceService } from '../../shared/services/http-service.service';
import { filter, from, map } from 'rxjs';

@Component({
  selector: 'app-dog-random',
  templateUrl: './dog-random.component.html',
  styleUrls: ['./dog-random.component.scss']
})
export class DogRandomComponent {

  searched = false;
  responseFromApi: any;
  breed = '';


  constructor(private htttpSvc: HttpServiceService) { }

  searchRandomBreed() {
    this.htttpSvc.getRamdonBreed().subscribe(response => {
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
