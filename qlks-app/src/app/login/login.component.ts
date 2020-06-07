import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginMode = true;
  public data = {};
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
    this.onCancel;
  }

  registerAction() {
  }

}
