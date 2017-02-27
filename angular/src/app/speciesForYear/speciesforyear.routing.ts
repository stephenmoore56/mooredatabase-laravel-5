import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {SpeciesForYearComponent} from "./speciesforyear.component";

const routes: Routes = [
    {path: '', component: SpeciesForYearComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);