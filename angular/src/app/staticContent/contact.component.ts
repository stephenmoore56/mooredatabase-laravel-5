import {Component} from "@angular/core";

@Component({
    selector: 'relative-path',
    templateUrl: 'templates/static/contact.html'
})
export class ContactComponent {
    public staticPage: boolean = true;

    constructor() {
        window.document.title = 'MOORE+DATABASE - Contact Me';
    }
}