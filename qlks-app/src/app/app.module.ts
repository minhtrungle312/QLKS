import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component'
import { HomeUserComponent } from './layouts/home-user-layout/home-user-layout.component';
import { HomeUserLayoutModule } from './layouts/home-user-layout/home-user-layout.module';
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { BookListDtlComponent } from './book-list/book-list-dtl/book-list-dtl.component';
import { HotelDtlComponent } from './hotel-dtl/hotel-dtl.component';
import { RoomDtlComponent } from './room-dtl/room-dtl.component';
import { BookComponent } from './room-dtl/book/book.component';
import { MHotelDtlComponent } from './management-hotel-list/m-hotel-dtl/m-hotel-dtl.component';
import { MRoomDtlComponent } from './management-room-list/m-room-dtl/m-room-dtl.component';
import { MCityDtlComponent } from './management-city-list/m-city-dtl/m-city-dtl.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HomeUserLayoutModule,
    MatDialogModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HomeUserComponent,
    LoginComponent,
    BookListDtlComponent,
    HotelDtlComponent,
    RoomDtlComponent,
    BookComponent,
    MHotelDtlComponent,
    MRoomDtlComponent,
    MCityDtlComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
