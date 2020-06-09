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
    { value: 'day1', viewValue: 'ngày 1' },
    { value: 'day2', viewValue: 'ngày 2' },
    { value: 'day3', viewValue: 'ngày 3' },
    { value: 'day4', viewValue: 'ngày 4' },
    { value: 'day5', viewValue: 'ngày 5' },
    { value: 'day6', viewValue: 'ngày 6' },
    { value: 'day7', viewValue: 'ngày 7' },
    { value: 'day8', viewValue: 'ngày 8' },
    { value: 'day9', viewValue: 'ngày 9' },
    { value: 'day10', viewValue: 'ngày 10' },
    { value: 'day11', viewValue: 'ngày 11' },
    { value: 'day12', viewValue: 'ngày 12' },
    { value: 'day13', viewValue: 'ngày 13' },
    { value: 'day14', viewValue: 'ngày 14' },
    { value: 'day15', viewValue: 'ngày 15' },
    { value: 'day16', viewValue: 'ngày 16' },
    { value: 'day17', viewValue: 'ngày 17' },
    { value: 'day18', viewValue: 'ngày 18' },
    { value: 'day19', viewValue: 'ngày 19' },
    { value: 'day20', viewValue: 'ngày 20' },
    { value: 'day21', viewValue: 'ngày 21' },
    { value: 'day22', viewValue: 'ngày 22' },
    { value: 'day23', viewValue: 'ngày 23' },
    { value: 'day24', viewValue: 'ngày 24' },
    { value: 'day25', viewValue: 'ngày 25' },
    { value: 'day26', viewValue: 'ngày 26' },
    { value: 'day27', viewValue: 'ngày 27' },
    { value: 'day28', viewValue: 'ngày 28' },
    { value: 'day29', viewValue: 'ngày 29' },
    { value: 'day30', viewValue: 'ngày 30' },
    { value: 'day31', viewValue: 'ngày 31' },
  ]

  constructor() { }

  ngOnInit(): void {
    this.typeRevenue = this.type;
    this.monthList = this.month;
    this.daylist = this.day;
  }

  onSelect() {
    if (this.selectDropdown == 'day')
      this.isSelectDay = true;
  }
}
