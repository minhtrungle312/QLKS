import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  public resultList: any = [];
  public dataMock = [
    {city: 'Phan Thiết', name: 'PHouse', pic: '/assets/img/ks1.jpg', remark: 'Gần tp'},
    {city: 'Quy Nhơn', name: 'Lake View', pic: '/assets/img/ks12.jpg', remark: 'Trung tâm TP'},
    {city: 'Quy Nhơn', name: 'Hương Việt', pic: '/assets/img/ks6.jpg', remark: 'View Biển'},
    {city: 'Quy Nhơn', name: 'Hải Âu', pic: '/assets/img/ks9.jpg', remark: 'View Biển'},
    {city: 'Quy Nhơn', name: 'Âu Cơ', pic: '/assets/img/ks10.jpg', remark: 'View Biển'}
  ]
  constructor() { }

  ngOnInit(): void {
    this.resultList = this.dataMock;
  }

}
