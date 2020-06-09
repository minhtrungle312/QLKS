import { Component, OnInit } from '@angular/core';
import { HotelService } from 'app/service/hotel.service';
import { MatDialog } from '@angular/material/dialog';
import { MHotelDtlComponent } from './m-hotel-dtl/m-hotel-dtl.component';

@Component({
  selector: 'app-management-hotel-list',
  templateUrl: './management-hotel-list.component.html',
  styleUrls: ['./management-hotel-list.component.css']
})
export class ManagementHotelListComponent implements OnInit {

  dataMock = [
    {stt: '1', hotelCode: 'MT_QN', hotelName: 'Mường Thanh Quy Nhơn', city: 'Quy Nhơn', address: '02 Nguyễn Huệ, Tp.Quy Nhơn', email: 'mtqn@gmail.com', std: '02563123456'},
    {stt: '2', hotelCode: 'SGQN_QN', hotelName: 'Sài Gòn - Quy Nhơn', city: 'Quy Nhơn', address: '100 Nguyễn Huệ, Tp.Quy Nhơn', email: 'mtqn@gmail.com', std: '02563123456'},
    {stt: '3', hotelCode: 'HA_QN', hotelName: 'Hải Âu Quy Nhơn', city: 'Quy Nhơn', address: 'Nguyễn Tất Thành, Tp.Quy Nhơn', email: 'mtqn@gmail.com', std: '02563123456'},
    {stt: '4', hotelCode: 'HY_QN', hotelName: 'Hoàng Yến Quy Nhơn', city: 'Quy Nhơn', address: 'Nguyễn Tất Thành, Tp.Quy Nhơn', email: 'mtqn@gmail.com', std: '02563123456'},
    {stt: '5', hotelCode: 'AC_QN', hotelName: 'Âu Cơ Quy Nhơn', city: 'Quy Nhơn', address: 'Nguyễn Tất Thành, Tp.Quy Nhơn', email: 'mtqn@gmail.com', std: '02563123456'},
    {stt: '6', hotelCode: 'MY_QN', hotelName: 'Maya Quy Nhơn', city: 'Quy Nhơn', address: 'Nguyễn Tất Thành, Tp.Quy Nhơn', email: 'mtqn@gmail.com', std: '02563123456'},
  ];
  public hotelList: any = [];

  constructor( 
    // private hotelService: HotelService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.hotelList = this.dataMock;
    // this.getAllHotel();
  }

  // getAllHotel() {
  //   const param: any = {};
  //   const result = this.hotelService.getAllHotel(param);
  //   result.subscribe((response: any) => {
  //     console.log(response);
  //   })
  // }
  onOpenDialog(state: any, hotel: any) {
    if (state == 'ADD') {
      hotel = [];
    }
    let itemTmp: any = [];
    itemTmp = hotel;
    itemTmp.state = state;
    const dialogRef = this.dialog.open(MHotelDtlComponent, {
      data: {itemDtl: itemTmp}
    })
    dialogRef.afterClosed().subscribe(result => {
  });
  }

}
