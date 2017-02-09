import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {HomeComponent} from './home.component';
import {CertificationsComponent} from './certifications.component';
import {EducationComponent} from './education.component';
import {TrainingComponent} from './training.component';
import {ContactComponent} from './contact.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'certifications', component: CertificationsComponent},
    {path: 'education', component: EducationComponent},
    {path: 'training', component: TrainingComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'reports/months', loadChildren: 'app/speciesByMonth/speciesbymonth.module#SpeciesByMonthModule'},
    {path: 'reports/months/:month', loadChildren: 'app/speciesForMonth/speciesformonth.module#SpeciesForMonthModule'},
    {path: 'reports/years', loadChildren: 'app/speciesByYear/speciesbyyear.module#SpeciesByYearModule'},
    {path: 'reports/years/:year', loadChildren: 'app/speciesForYear/speciesforyear.module#SpeciesForYearModule'},
    {path: 'reports/orders', loadChildren: 'app/speciesByOrder/speciesbyorder.module#SpeciesByOrderModule'},
    {path: 'reports/orders/:id', loadChildren: 'app/speciesForOrder/speciesfororder.module#SpeciesForOrderModule'},
    {path: 'reports/locations', loadChildren: 'app/speciesByLocation/speciesbylocation.module#SpeciesByLocationModule'},
    {
        path: 'reports/locations/:id',
        loadChildren: 'app/speciesForLocation/speciesforlocation.module#SpeciesForLocationModule'
    },
    {path: '', component: HomeComponent, pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);