import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SpeciesForOrderComponent} from './speciesfororder.component';

const routes: Routes = [
    {path: '', component: SpeciesForOrderComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);