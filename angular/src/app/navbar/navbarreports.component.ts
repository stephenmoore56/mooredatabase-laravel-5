import {Component} from "@angular/core";

@Component({
    selector: '[ng-nav-bar-reports]',
    template: `
    <li><a [routerLink]="['/reports/years']" routerLinkActive="active">Species &amp; Trips By Year</a></li>
    <li><a [routerLink]="['/reports/months']" routerLinkActive="active">Species &amp; Trips By Month</a></li>
    <li><a [routerLink]="['/reports/orders']" routerLinkActive="active">Species By Order</a></li>
    <li><a [routerLink]="['/reports/locations']" routerLinkActive="active">Species By Location</a></li>
    <li><a [routerLink]="['/reports/all']" routerLinkActive="active">All Species Sighted</a></li>
	<li><a [routerLink]="['/reports/ducksAndWarblers']" routerLinkActive="active">Ducks &amp; Warblers</a></li>
    <li><a [routerLink]="['/reports/search']" routerLinkActive="active">Search All Species</a></li>
`
})
export class NavBarReportsComponent {
}