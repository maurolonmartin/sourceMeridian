import { Component, OnInit } from '@angular/core';
import { Breed } from 'src/app/shared/interfaces/breed';
import { HttpServiceService } from 'src/app/shared/services/http-service.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent implements OnInit {

  dogBreeds: Breed[] = []

  constructor(private readonly httpSvc: HttpServiceService) { }

  ngOnInit(): void {
    this.httpSvc.getAllBreeds().subscribe((result) => {
      this.dogBreeds = result.message;
      console.log('listado de razas desde el componente principal', this.dogBreeds)
    })
  }

}
