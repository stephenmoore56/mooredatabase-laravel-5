import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SpeciesByOrderComponent} from './speciesbyorder.component';

const routes: Routes = [
    {path: '', component: SpeciesByOrderComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);