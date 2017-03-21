import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {DucksAndWarblersComponent} from "./ducksAndWarblers.component";

const routes: Routes = [
    {path: '', component: DucksAndWarblersComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);