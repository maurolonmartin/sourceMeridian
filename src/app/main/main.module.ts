import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogListComponent } from './dog-list/dog-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DogListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MainModule { }
