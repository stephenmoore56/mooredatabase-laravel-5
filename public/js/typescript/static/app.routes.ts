import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {HomeComponent} from './home.component';
import {CertificationsComponent} from './certifications.component';
import {EducationComponent} from './education.component';
import {TrainingComponent} from './training.component';
import {ContactComponent} from './contact.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'certifications', component: CertificationsComponent},
    {path: 'education', component: EducationComponent},
    {path: 'training', component: TrainingComponent},
    {path: 'contact', component: ContactComponent},
    {path: '', component: HomeComponent, pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);