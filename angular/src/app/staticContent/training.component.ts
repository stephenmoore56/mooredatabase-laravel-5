import {Component} from "@angular/core";

@Component({
    selector: 'relative-path',
    templateUrl: 'templates/static/training.html'
})

export class TrainingComponent {
    public staticPage: boolean = true;

    constructor() {
        window.document.title = 'MOORE+DATABASE - Training';
    }
}