import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/shared/services/http-service.service';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss']
})
export class DogCardComponent implements OnInit {

  dogsList: any;

  constructor(private readonly httpSvc: HttpServiceService) {

  }

  ngOnInit(): void {
    this.httpSvc.getAllBreds().subscribe(dogs => {
      console.log(dogs)

    })
  }

}
