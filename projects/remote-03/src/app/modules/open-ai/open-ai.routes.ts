import { Routes } from '@angular/router';
import { OpenAIHomeComponent } from './components/home/home.component'


export const REMOTE_ROUTES: Routes = [
    {
      path: '',
      component: OpenAIHomeComponent
    },
];