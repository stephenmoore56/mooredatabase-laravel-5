import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {SpeciesForMonthComponent} from "./speciesformonth.component";

const routes: Routes = [
    {path: '', component: SpeciesForMonthComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);