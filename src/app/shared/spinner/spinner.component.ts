import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="overlay" *ngIf= 'isLoading$ | async'>
      <mat-spinner></mat-spinner>
    </div>
  `,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  isLoading$ = this.spinnerService.isLoading$;

  constructor(private readonly spinnerService: SpinnerService) { }

}
