import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SpeciesAllComponent} from './speciesall.component';

const routes: Routes = [
    {path: '', component: SpeciesAllComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);