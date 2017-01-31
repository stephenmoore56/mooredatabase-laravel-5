import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'absolute-path',
    templateUrl: 'templates/static-content/index.html',
    directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent {}