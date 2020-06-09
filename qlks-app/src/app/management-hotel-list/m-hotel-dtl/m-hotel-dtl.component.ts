import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'app/service/dialog-data';

@Component({
  selector: 'app-m-hotel-dtl',
  templateUrl: './m-hotel-dtl.component.html',
  styleUrls: ['./m-hotel-dtl.component.css']
})
export class MHotelDtlComponent implements OnInit {
  public isAdd: boolean;
  public isUpd: boolean;
  public isDel: boolean;

  constructor(public dialogRef: MatDialogRef<MHotelDtlComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    this.setDataInit();
    this.data = this.data.itemDtl;
  }

  onClose() {
    this.dialogRef.close();
  }
  setDataInit() {
    if (this.data.itemDtl.state == 'ADD') {
      this.isAdd = true;
    } else if (this.data.itemDtl.state == 'UPDATE') {
      this.isUpd = true;
    } else {
      this.isDel = true;
    }
  }

}
