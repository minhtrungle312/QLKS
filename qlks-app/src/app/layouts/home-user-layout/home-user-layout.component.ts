import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import 'rxjs/add/operator/filter';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import PerfectScrollbar from 'perfect-scrollbar';
import * as $ from 'jquery';

@Component({
    selector: 'app-home-user-layout',
    templateUrl: './home-user-layout.component.html',
    styleUrls: ['./home-user-layout.component.scss']
})
export class HomeUserComponent implements OnInit, AfterViewInit {
    private _router: Subscription;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];

    constructor(public location: Location, private router: Router) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }

}
