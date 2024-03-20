import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const REMOTE_ROUTES: Routes = [
    { path: '', component: AppComponent, pathMatch: 'full'}
];
