import {Component} from '@angular/core';

@Component({
    selector: 'back-button',
    template: `
    <div class="form-group" style="margin-bottom: 10px;">
	<button id="backButton" type="button" class="btn btn-success btn-sm" (click)="goBack()">
		<span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>
		Back
	</button>
    </div>
`
})
export class BackButtonComponent {
    public goBack() {
        window.history.back();
    };
}