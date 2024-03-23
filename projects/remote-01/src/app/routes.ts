import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChartHomeComponent } from './modules/charts/components/home/home.component';
import { MyStandAloneComponent } from './components/my-stand-alone/my-stand-alone.component';

export const REMOTE_ROUTES: Routes = [
    { path: 'home', component: HomeComponent, pathMatch: 'full'},
    { path: 'charts', component: ChartHomeComponent, pathMatch: 'full'},
    { path: 'stand-alone-component', component: MyStandAloneComponent, pathMatch: 'full'}
];
