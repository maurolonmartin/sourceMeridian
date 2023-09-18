import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogListComponent } from './dog-list/dog-list.component';
import { SharedModule } from '../shared/shared.module';
import { DogCardComponent } from './dog-list/dog-card/dog-card.component';
import { DogRandomComponent } from './dog-random/dog-random.component';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    DogListComponent,
    DogCardComponent,
    DogRandomComponent
  ],
  exports: [DogListComponent],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ]
})
export class MainModule { }
