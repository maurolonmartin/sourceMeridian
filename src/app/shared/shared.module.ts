import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Components 
import { SpinnerComponent } from './spinner/spinner.component';
import { MaterialModule } from './material/material/material.module';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SpinnerComponent,
    HeaderComponent
  ],
  exports: [
    SpinnerComponent,
    MaterialModule,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
