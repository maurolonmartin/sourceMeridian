import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';

//Components
import { DogListComponent } from './dog-list/dog-list.component';
import { DogCardComponent } from './dog-list/dog-card/dog-card.component';
import { DogRandomComponent } from './dog-random/dog-random.component';


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
    RouterModule,
    MainRoutingModule
  ]
})
export class MainModule { }
