import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES, ROUTES_ADMIN } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'app/login/login.component';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    mobile_menu_visible: any = 0;
    private toggleButton: any;
    private sidebarVisible: boolean;
    public isLogin: boolean;
    public phoneNumber: '0329-808-939';
    public layer: any;
    public listTitlesUser: any;

    constructor(location: Location, private element: ElementRef, private router: Router, public dialog: MatDialog) {
        this.location = location;
        this.sidebarVisible = false;
    }

    ngOnInit() {
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        this.listTitlesUser = ROUTES_ADMIN.filter(listTitle => listTitle);
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe((event) => {
            this.sidebarClose();
            this.layer = document.getElementsByClassName('close-layer')[0];
            if (this.layer) {
                this.layer.remove();
                this.mobile_menu_visible = 0;
            }
        });
        this.getTitle();
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);

        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        const toggle = document.getElementsByClassName('navbar-toggler')[0];

        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
        const body = document.getElementsByTagName('body')[0];

        if (this.mobile_menu_visible === 1) {
            body.classList.remove('nav-open');
            if (this.layer) {
                this.layer.remove();
            }
            setTimeout(function () {
                toggle.classList.remove('toggled');
            }, 400);

            this.mobile_menu_visible = 0;
        } else {
            setTimeout(function () {
                toggle.classList.add('toggled');
            }, 430);

            const layer = document.createElement('div');
            layer.setAttribute('class', 'close-layer');


            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild(layer);
            } else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild(layer);
            }

            setTimeout(function () {
                layer.classList.add('visible');
            }, 100);
            // asign a function
            layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                layer.classList.remove('visible');
                setTimeout(function () {
                    layer.remove();
                    toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);

            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;

        }
    };

    getTitle() {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }

        for (let item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Trang chủ';
    }
    getNumberPhone() {
        return 'Liên hệ' + '0329-808-939';
    }

    onOpenLogin() {
        const dialogRef = this.dialog.open(LoginComponent);
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            this.isLogin = true;
        });
    }

    userProfile() {
        this.router.navigate(['user-profile']);
    }
    logout() {
        this.isLogin = !this.isLogin;
        this.router.navigate(['/']);
    }
    bookList() {
        this.router.navigate(['room-book'])
    }
}
