import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeUserRoutes } from './home-user-layout.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { BookListComponent } from 'app/book-list/book-list.component';
import { SearchResultComponent } from 'app/search-result/search-result.component';



@NgModule({
  declarations: [
    BookListComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeUserRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatDialogModule,
  ]
})
export class HomeUserLayoutModule { }
