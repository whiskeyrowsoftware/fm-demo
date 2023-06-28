import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GooglePieChartComponent } from './components/google-pie-chart/google-pie-chart.component';
import { RouterModule } from '@angular/router';
import { GOOGLE_CHART_ROUTES } from './chart.routes';
import { ChartHomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    GooglePieChartComponent,
    ChartHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(GOOGLE_CHART_ROUTES),
  ]
})
export class ChartsModule { }
