import {Component} from "@angular/core";

@Component({
    selector: 'relative-path',
    templateUrl: 'templates/static/education.html'
})
export class EducationComponent {
    public staticPage: boolean = true;

    constructor() {
        window.document.title = 'MOORE+DATABASE - Education';
    }
}