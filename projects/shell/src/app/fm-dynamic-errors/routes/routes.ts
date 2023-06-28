import { Routes } from '@angular/router';
import { FmModNotFoundComponent } from '../components/not-found/not-found.component';



export const routes: Routes = [
   {
        path: '',
        component: FmModNotFoundComponent,
        pathMatch: 'full',
   },
];
