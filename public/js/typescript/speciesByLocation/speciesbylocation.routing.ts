import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SpeciesByLocationComponent} from './speciesbylocation.component';

const routes: Routes = [
    {path: '', component: SpeciesByLocationComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);