import {NgModule, ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./staticContent/home.component";
import {CertificationsComponent} from "./staticContent/certifications.component";
import {EducationComponent} from "./staticContent/education.component";
import {TrainingComponent} from "./staticContent/training.component";
import {ContactComponent} from "./staticContent/contact.component";

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
    {path: 'reports/all', loadChildren: 'app/speciesAll/speciesall.module#SpeciesAllModule'},
    {path: 'reports/search', loadChildren: 'app/searchAll/searchall.module#SearchAllModule'},
    {path: 'reports/species/:id', loadChildren: 'app/speciesDetail/speciesdetail.module#SpeciesDetailModule'},
    {path: '', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}