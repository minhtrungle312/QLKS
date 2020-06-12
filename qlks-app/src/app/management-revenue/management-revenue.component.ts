import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management-revenue',
  templateUrl: './management-revenue.component.html',
  styleUrls: ['./management-revenue.component.css']
})
export class ManagementRevenueComponent implements OnInit {
  public typeRevenue: any = [];
  public monthList: any = [];
  public daylist: any = [];
  public selectDropdown: any;
  public isSelectDay: boolean;
  public dayRp: boolean;
  public monthRp: boolean;
  public selectMonth: any;
  public selectDay: any;
  type: any = [
    { value: 'month', viewValue: 'Thống kê theo tháng' },
    { value: 'day', viewValue: 'Thống kê theo ngày' },
  ];
  month: any = [
    { value: '1', viewValue: 'Tháng 1' },
    { value: '2', viewValue: 'Tháng 2' },
    { value: '3', viewValue: 'Tháng 3' },
    { value: '4', viewValue: 'Tháng 4' },
    { value: '5', viewValue: 'Tháng 5' },
    { value: '6', viewValue: 'Tháng 6' },
    { value: '7', viewValue: 'Tháng 7' },
    { value: '8', viewValue: 'Tháng 8' },
    { value: '9', viewValue: 'Tháng 9' },
    { value: '10', viewValue: 'Tháng 10' },
    { value: '11', viewValue: 'Tháng 11' },
    { value: '12', viewValue: 'Tháng 11' },
  ];
  day: any = [
    { value: '1', viewValue: 'ngày 1' },
    { value: '2', viewValue: 'ngày 2' },
    { value: '3', viewValue: 'ngày 3' },
    { value: '4', viewValue: 'ngày 4' },
    { value: '5', viewValue: 'ngày 5' },
    { value: '6', viewValue: 'ngày 6' },
    { value: '7', viewValue: 'ngày 7' },
    { value: '8', viewValue: 'ngày 8' },
    { value: '9', viewValue: 'ngày 9' },
    { value: '10', viewValue: 'ngày 10' },
    { value: '11', viewValue: 'ngày 11' },
    { value: '12', viewValue: 'ngày 12' },
    { value: '13', viewValue: 'ngày 13' },
    { value: '14', viewValue: 'ngày 14' },
    { value: '15', viewValue: 'ngày 15' },
    { value: '16', viewValue: 'ngày 16' },
    { value: '17', viewValue: 'ngày 17' },
    { value: '18', viewValue: 'ngày 18' },
    { value: '19', viewValue: 'ngày 19' },
    { value: '20', viewValue: 'ngày 20' },
    { value: '21', viewValue: 'ngày 21' },
    { value: '22', viewValue: 'ngày 22' },
    { value: '23', viewValue: 'ngày 23' },
    { value: '24', viewValue: 'ngày 24' },
    { value: '25', viewValue: 'ngày 25' },
    { value: '26', viewValue: 'ngày 26' },
    { value: '27', viewValue: 'ngày 27' },
    { value: '28', viewValue: 'ngày 28' },
    { value: '29', viewValue: 'ngày 29' },
    { value: '30', viewValue: 'ngày 30' },
    { value: '31', viewValue: 'ngày 31' },
  ]

  mockdataMonth = [
    {inv: '20200601', name: 'Hoài Nhiên', hotelCd: 'QN-HA', roomCd: 'P105', hireDate: '01-06-2020', returnDate: '02-06-2020', payment:'360.000Đ' },
    {inv: '20200603', name: 'Hoài Nhiên', hotelCd: 'QN-MT', roomCd: 'P305', hireDate: '02-06-2020', returnDate: '03-06-2020', payment:'900.000Đ' },
    {inv: '20200610', name: 'Hoài Nhiên', hotelCd: 'QN-SG', roomCd: 'P404', hireDate: '10-06-2020', returnDate: '11-06-2020', payment:'700.000Đ' },
    {inv: '20200607', name: 'Hoài Nhiên', hotelCd: 'QN-HY', roomCd: 'P401', hireDate: '07-06-2020', returnDate: '07-06-2020', payment:'200.000Đ' },
    {inv: '20200618', name: 'Hoài Nhiên', hotelCd: 'QN-MY', roomCd: 'P200', hireDate: '17-06-2020', returnDate: '18-06-2020', payment:'300.000Đ' },
    {inv: '20200611', name: 'Hoài Nhiên', hotelCd: 'QN-HA', roomCd: 'P500', hireDate: '10-06-2020', returnDate: '11-06-2020', payment:'190.000Đ' },
  ]

  mockDateDay = [
    {inv: '20200601', name: 'Hoài Nhiên', hotelCd: 'QN-HA', roomCd: 'P105', hireDate: '01-06-2020', returnDate: '02-06-2020', payment:'360.000Đ' },
    {inv: '20200601', name: 'Hoài Nhiên', hotelCd: 'QN-MT', roomCd: 'P305', hireDate: '02-06-2020', returnDate: '03-06-2020', payment:'900.000Đ' },
    {inv: '20200601', name: 'Hoài Nhiên', hotelCd: 'QN-SG', roomCd: 'P404', hireDate: '10-06-2020', returnDate: '11-06-2020', payment:'700.000Đ' },
  ]

  data: any  = [];

  constructor() { }

  ngOnInit(): void {
    this.typeRevenue = this.type;
    this.monthList = this.month;
    this.daylist = this.day;
  }

  onSelect() {
    if (this.selectDropdown == 'day') {
      this.isSelectDay = true;
    } else {
      this.isSelectDay = false;
    }
  }
  showData() {
    if (this.isSelectDay) {
      this.monthRp = false;
      this.data = this.mockDateDay;
      this.dayRp = true;
    } else {
      this.monthRp = true;
      this.dayRp = false;
      this.data = this.mockdataMonth;
    }
  }
}
