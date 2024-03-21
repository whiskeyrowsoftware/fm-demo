import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OpenAIHomeComponent } from './modules/open-ai/components/home/home.component';

export const REMOTE_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'open-ai', component: OpenAIHomeComponent, pathMatch: 'full'},
];
