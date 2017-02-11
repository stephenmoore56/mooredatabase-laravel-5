import {Component} from '@angular/core';

@Component({
    selector: 'species-count',
    template: `
<span id="speciesCount" class="form-static-control">
	{{ birds.length || 0 }} Species
</span>`
})
export class SpeciesCountComponent {
}