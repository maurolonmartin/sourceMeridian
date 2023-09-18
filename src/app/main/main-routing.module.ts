import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogListComponent } from './dog-list/dog-list.component';
import { DogRandomComponent } from './dog-random/dog-random.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'random', component: DogRandomComponent },
      { path: 'dog-list', component: DogListComponent },
      { path: '**', redirectTo: 'dog-list' }
    ],
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
