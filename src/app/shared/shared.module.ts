import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


// Material and Components 
import { MaterialModule } from './material/material/material.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    HeaderComponent
  ],
  exports: [
    MaterialModule,
    SpinnerComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
