import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SpeciesByMonthComponent} from './speciesbymonth.component';
// import {SpeciesForMonthModule} from '../speciesForMonth/speciesformonth.module';

const routes: Routes = [
    {path: '', component: SpeciesByMonthComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);