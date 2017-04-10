import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {SpeciesYTDComponent} from "./speciesytd.component";

const routes: Routes = [
    {path: '', component: SpeciesYTDComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);