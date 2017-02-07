import {Component, Input} from '@angular/core';

@Component({
    selector: 'search-birds',
    template: `
    <div class="form-group" style="margin-bottom: 10px;">
	<label for="searchBirds" class="control-label">Filter:</label>
	<input type="search" id="searchBirds" name="searchBirds" class="form-control input-sm"
		   placeholder="Search for..."
		   data-ng-model="birdQuery" size="50" maxlength="50">
    </div>
`
})
export class SearchBirdsComponent {
    @Input() public birds: Result[] = [];
}