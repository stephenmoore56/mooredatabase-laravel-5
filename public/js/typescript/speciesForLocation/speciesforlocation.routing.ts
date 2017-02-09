import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SpeciesForLocationComponent} from './speciesforlocation.component';

const routes: Routes = [
    {path: '', component: SpeciesForLocationComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);