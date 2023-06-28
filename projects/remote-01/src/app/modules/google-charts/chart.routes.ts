import { Routes } from '@angular/router';
import { ChartHomeComponent } from './components/home/home.component'
import { GooglePieChartComponent } from './components/google-pie-chart/google-pie-chart.component'; 
import { MyStandAloneComponent } from '../../components/my-stand-alone/my-stand-alone.component';

export const GOOGLE_CHART_ROUTES: Routes = [
    {
      path: '',
      component: ChartHomeComponent
    },
    {
      path: 'google-pie-chart',
      component: GooglePieChartComponent
    },
    {
      path: 'stand-alone-component',
      component: MyStandAloneComponent
    },
];