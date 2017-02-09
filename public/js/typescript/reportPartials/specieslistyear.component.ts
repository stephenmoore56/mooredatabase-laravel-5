import {Component, Input} from '@angular/core';
import {Sortable} from '../sortable';
import {Result} from '../result';

@Component({
    selector: 'species-list-year',
    templateUrl: 'templates/directives/species-list-year.html'
})
export class SpeciesListYearComponent extends Sortable {
    @Input() public birds: Result[] = [];
}