import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Material Modules
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
