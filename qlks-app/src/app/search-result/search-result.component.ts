import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  public resultList: any = [];
  public dataMock = [
    {city: 'Phan Thiết', name: 'PHouse', pic: '', remark: 'Gần tp'},
    {city: 'Quy Nhơn', name: 'Lake View', pic: '', remark: 'Gần tp'},
    {city: 'Quy Nhơn', name: 'Hương Việt', pic: '', remark: 'Gần tp'},
    {city: 'Quy Nhơn', name: 'Hải Âu', pic: '', remark: 'Gần tp'},
    {city: 'Quy Nhơn', name: 'Âu Cơ', pic: '', remark: 'Gần tp'}
  ]
  constructor() { }

  ngOnInit(): void {
    this.resultList = this.dataMock;
  }

}
