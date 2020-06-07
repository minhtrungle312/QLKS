import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'app/service/dialog-data';

@Component({
  selector: 'app-book-list-dtl',
  templateUrl: './book-list-dtl.component.html',
  styleUrls: ['./book-list-dtl.component.css']
})
export class BookListDtlComponent implements OnInit {
  public itemDtl: any;

  constructor(public dialogRef: MatDialogRef<BookListDtlComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    console.log(this.data.itemDtl);
  }
  onClose() {
    this.dialogRef.close();
  }

}
