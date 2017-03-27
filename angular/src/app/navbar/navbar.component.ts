import {Component} from "@angular/core";

@Component({
    selector: '[ng-nav-bar]',
    template: `
		<li><a [routerLink]="['/education']" routerLinkActive="active">Education</a></li>
		<li><a [routerLink]="['/certifications']" routerLinkActive="active">Certifications</a></li>
		<li><a [routerLink]="['/training']" routerLinkActive="active">Training</a></li>
		<li><a [routerLink]="['/contact']" routerLinkActive="active">Contact Me</a></li>
    `
})
export class NavBarComponent {
}