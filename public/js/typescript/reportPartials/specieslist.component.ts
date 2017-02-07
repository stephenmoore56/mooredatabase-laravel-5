import {Component, Input} from '@angular/core';
import {Sortable} from '../sortable';
import {Result} from '../result';

@Component({
    selector: 'species-list',
    templateUrl: 'templates/directives/species-list.html'
})
export class SpeciesListComponent extends Sortable {
    @Input() public birds: Result[] = [];
}