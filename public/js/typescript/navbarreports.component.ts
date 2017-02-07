import {Component} from '@angular/core';

@Component({
    selector: '[ng-nav-bar-reports]',
    template: `
    <li><a [routerLink]="['/reports/months']" routerLinkActive="active">Species & Trips By Month</a></li>
    <li><a [routerLink]="['/reports/years']" routerLinkActive="active">Species & Trips By Year</a></li>
    <li><a [routerLink]="['/reports/orders']" routerLinkActive="active">Species By Order</a></li>
    `
})
export class NavBarReportsComponent {
}