import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Components 
import { SpinnerComponent } from './spinner/spinner.component';
import { MaterialModule } from './material/material/material.module';



@NgModule({
  declarations: [
    SpinnerComponent
  ],
  exports: [
    SpinnerComponent,
    MaterialModule
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
