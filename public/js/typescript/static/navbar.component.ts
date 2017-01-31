import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'nav-bar',
    template: `
    <li><a [routerLink]="[education]" routerLinkActive="active">Education</a></li>
    <li><a [routerLink]="[certifications]" routerLinkActive="active">Certifications</a></li>
    <li><a [routerLink]="[training]" routerLinkActive="active">Training</a></li>
    <li><a [routerLink]="[contact]" routerLinkActive="active">Contact Me</a></li>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class NavBarComponent {
}