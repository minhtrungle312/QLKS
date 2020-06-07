import { Component, OnInit } from '@angular/core';
import { HotelService } from 'app/service/hotel.service';

@Component({
  selector: 'app-management-hotel-list',
  templateUrl: './management-hotel-list.component.html',
  styleUrls: ['./management-hotel-list.component.css']
})
export class ManagementHotelListComponent implements OnInit {

  constructor( private hotelService: HotelService) { }

  ngOnInit(): void {
    this.getAllHotel();
  }

  getAllHotel() {
    const param: any = {};
    const result = this.hotelService.getAllHotel(param);
    result.subscribe((response: any) => {
      console.log(response);
    })
  }

}
