import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SpeciesByYearComponent} from './speciesbyyear.component';

const routes: Routes = [
    {path: '', component: SpeciesByYearComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);