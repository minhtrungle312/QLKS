import { Component, OnInit } from '@angular/core';
import { BookListDtlComponent } from './book-list-dtl/book-list-dtl.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  public historyList: any = [];
  public bookingList: any = [];
  public selected: any;
  dataMock = [
    { imgPath:'/assets/img/logo_b.png', name: 'Khách Sạn A', hireDate:'2020-06-01', returnDate: '2020-06-03', payMent:'150,000Đ'},
    { imgPath:'/assets/img/logo_b.png', name: 'Khách Sạn B', hireDate:'2020-06-01', returnDate: '2020-06-03', payMent:'150,000Đ'},
    { imgPath:'/assets/img/logo_b.png', name: 'Khách Sạn C', hireDate:'2020-06-01', returnDate: '2020-06-03', payMent:'150,000Đ'},
    { imgPath:'/assets/img/logo_b.png', name: 'Khách Sạn D', hireDate:'2020-06-01', returnDate: '2020-06-03', payMent:'150,000Đ' },
    { imgPath:'/assets/img/logo_b.png', name: 'Khách Sạn E', hireDate:'2020-06-01', returnDate: '2020-06-03', payMent:'150,000Đ' },
    { imgPath:'/assets/img/logo_b.png', name: 'Khách Sạn F', hireDate:'2020-06-01', returnDate: '2020-06-03', payMent:'150,000Đ' },
    { imgPath:'/assets/img/logo_b.png', name: 'Khách Sạn G', hireDate:'2020-06-01', returnDate: '2020-06-03', payMent:'150,000Đ' },
    { imgPath:'/assets/img/logo_b.png', name: 'Khách Sạn H', hireDate:'2020-06-01', returnDate: '2020-06-03', payMent:'150,000Đ' },
    { imgPath:'/assets/img/logo_b.png', name: 'Khách Sạn J', hireDate:'2020-06-01', returnDate: '2020-06-03', payMent:'150,000Đ' },
    { imgPath:'/assets/img/logo_b.png', name: 'Khách Sạn K', hireDate:'2020-06-01', returnDate: '2020-06-03', payMent:'150,000Đ'}
  ]
  dataMock2 = [
    { imgPath:'/assets/img/logo_b.png', name: 'Khách Sạn Mường Thanh Quy Nhơn', hireDate:'2020-06-01', returnDate: '2020-06-03', payMent:'150,000Đ'},
    { imgPath:'/assets/img/logo_b.png', name: 'Khách Sạn Lake View Quy Nhơn', hireDate:'2020-06-01', returnDate: '2020-06-03', payMent:'350,000Đ'},
  ]
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.historyList = this.dataMock;
    this.bookingList = this.dataMock2;
  }

  onSelect(room: any): void {
    this.selected = room;
  }

  onOpenDetail(room) {
    const dialogRef = this.dialog.open(BookListDtlComponent, {
      data: {itemDtl: room}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
  });
  }

}
