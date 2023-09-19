import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss']
})
export class DogCardComponent implements OnInit {

  @Input({ required: true }) url!: string;
  @Input({ required: true }) breed!: string;

  ngOnInit() {
    console.log('url en el card', this.url!)
    console.log(this.breed!)
  }

}
