import { Component, OnInit } from '@angular/core';
import { MCityDtlComponent } from './m-city-dtl/m-city-dtl.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-management-city-list',
  templateUrl: './management-city-list.component.html',
  styleUrls: ['./management-city-list.component.css']
})
export class ManagementCityListComponent implements OnInit {

  public cityList: any = [];

  mockData = [
    {stt: '1', pic:'/assets/img/qn.jpg', cityCode: 'QN', cityName: 'Quy Nhơn'},
    {stt: '2', pic:'/assets/img/qana.jpg', cityCode: 'QaNa', cityName: 'Quảng Nam'},
    {stt: '3', pic:'/assets/img/dn.jpg', cityCode: 'ĐN', cityName: 'Đà Nẵng'},
    {stt: '4', pic:'/assets/img/sg.jpg', cityCode: 'SG', cityName: 'TP. Hồ Chí Minh'},
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cityList =this.mockData;
  }
  onOpenDialog(state: any, cityDtl: any) {
    if (state == 'ADD') {
      cityDtl = [];
    }
    let itemTmp: any = [];
    itemTmp = cityDtl;
    itemTmp.state = state;
    const dialogRef = this.dialog.open(MCityDtlComponent, {
      data: {itemDtl: itemTmp}
    })
    dialogRef.afterClosed().subscribe(result => {
  });
  }

}
