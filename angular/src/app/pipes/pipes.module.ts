import {NgModule} from "@angular/core";
import {OrderNamePipe} from '../pipes/orderName.pipe';
import {TopNPipe} from '../pipes/topN.pipe';
import {SearchTermPipe} from '../pipes/searchTerm.pipe';

@NgModule({
    declarations: [
        OrderNamePipe,
        TopNPipe,
        SearchTermPipe
    ],
    exports: [
        OrderNamePipe,
        TopNPipe,
        SearchTermPipe
    ]
})
export class PipesModule {
}