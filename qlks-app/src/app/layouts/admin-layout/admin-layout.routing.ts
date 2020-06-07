import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ManagementHotelListComponent } from 'app/management-hotel-list/management-hotel-list.component';
import { ManagementRevenueComponent } from 'app/management-revenue/management-revenue.component';
import { ManagementCityListComponent } from 'app/management-city-list/management-city-list.component';
import { ManagementRoomListComponent } from 'app/management-room-list/management-room-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'admin/revenue',      component: ManagementRevenueComponent },
    { path: 'admin/hotel-list',   component: ManagementHotelListComponent },
    { path: 'admin/city-list',     component: ManagementCityListComponent },
    { path: 'admin/room-list',     component: ManagementRoomListComponent },
    { path: 'admin/icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
