import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SearchAllComponent} from './searchall.component';

const routes: Routes = [
    {path: '', component: SearchAllComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);