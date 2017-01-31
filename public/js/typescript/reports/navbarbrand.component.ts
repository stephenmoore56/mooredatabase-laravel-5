import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'nav-bar-brand',
    template: `
    <a class="navbar-brand" routerLink="/">MOORE+DATABASE</a>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class NavBarBrandComponent {
}