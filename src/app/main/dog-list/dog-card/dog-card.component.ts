import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss']
})
export class DogCardComponent {

  @Input({ required: true }) url!: string;
  @Input({ required: true }) breed!: string;
}
