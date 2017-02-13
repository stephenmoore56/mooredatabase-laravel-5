import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {SpeciesDetailComponent} from "./speciesdetail.component";

const routes: Routes = [
    {path: '', component: SpeciesDetailComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);