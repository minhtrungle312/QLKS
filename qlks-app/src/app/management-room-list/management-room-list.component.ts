import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MRoomDtlComponent } from './m-room-dtl/m-room-dtl.component';

@Component({
  selector: 'app-management-room-list',
  templateUrl: './management-room-list.component.html',
  styleUrls: ['./management-room-list.component.css']
})
export class ManagementRoomListComponent implements OnInit {
  public roomList: any = [];
  mockData = [
    {hotelCode: 'MT-QN', roomCode: 'P-102', roomName: 'Phòng 102', price: '350.000Đ', isBooking: 'Còn trống', roomType: 'Phòng đơn'},
    {hotelCode: 'HA-QN', roomCode: 'P-205', roomName: 'Phòng 205', price: '450.000Đ', isBooking: 'Còn trống', roomType: 'Phòng đôi'},
    {hotelCode: 'MT-QN', roomCode: 'P-101', roomName: 'Phòng 101', price: '300.000Đ', isBooking: 'Đã đặt', roomType: 'Phòng đôi'},
    {hotelCode: 'HY-QN', roomCode: 'P-504', roomName: 'Phòng 504', price: '700.000Đ', isBooking: 'Còn trống', roomType: 'Phòng VIP'},
    {hotelCode: 'MY-QN', roomCode: 'P-502', roomName: 'Phòng 502', price: '900.000Đ', isBooking: 'Đã đặt', roomType: 'Phòng VIP'},
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.roomList = this.mockData;
  }

  onOpenDialog(state: any, room: any) {
    if (state == 'ADD') {
      room = [];
    }
    let itemTmp: any = [];
    itemTmp = room;
    itemTmp.state = state;
    const dialogRef = this.dialog.open(MRoomDtlComponent, {
      data: {itemDtl: itemTmp}
    })
    dialogRef.afterClosed().subscribe(result => {
  });
  }

}
