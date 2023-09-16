import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogListComponent } from './dog-list/dog-list.component';
import { SharedModule } from '../shared/shared.module';
import { DogCardComponent } from './dog-list/dog-card/dog-card.component';



@NgModule({
  declarations: [
    DogListComponent,
    DogCardComponent
  ],
  exports: [DogCardComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MainModule { }
