import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginMode = true;
  public data: any = {};
  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }
  changeMode() {
    this.loginMode = !this.loginMode;
  }
  execute(state) {
    if (state == 'LOGIN') {
      this.loginAction();
    }
    if (state == 'REGISTER') {
      this.registerAction();
    }
  }

  loginAction() {
    if (this.data.username == 'admin') {
      this.data.roleCode = 2
    } else {
      this.data.roleCode = 1;
    }
    this.onCancel;
  }

  registerAction() {
  }

}
