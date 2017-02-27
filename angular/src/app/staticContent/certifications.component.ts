import {Component} from "@angular/core";

@Component({
    selector: 'relative-path',
    templateUrl: 'templates/static/certifications.html'
})
export class CertificationsComponent {
    public staticPage: boolean = true;

    constructor() {
        window.document.title = 'MOORE+DATABASE - Certifications';
    }
}