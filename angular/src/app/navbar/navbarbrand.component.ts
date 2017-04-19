import {Component} from "@angular/core";

@Component({
    selector: '[data-nav-bar-brand]',
    template: `
		<a class="navbar-brand" routerLink="/">MOORE+DATABASE</a>
    `
})
export class NavBarBrandComponent {
}