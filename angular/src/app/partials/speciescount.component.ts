import {Component, Input} from "@angular/core";
import {Result} from "../lib/result";

@Component({
    selector: 'species-count',
    template: `
    <span id="speciesCount" class="form-static-control">
        {{ birds.length || 0 }} Species
    </span>`
})
export class SpeciesCountComponent {
    @Input() public birds: Result[] = [];
}