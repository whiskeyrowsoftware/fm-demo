import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AnimationHomeComponent } from './modules/animation/components/home/home.component';

export const REMOTE_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'open-ai', component: AnimationHomeComponent, pathMatch: 'full'},
];
