import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Components 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    SpinnerComponent
  ],
  exports: [
    MatProgressSpinnerModule, SpinnerComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
