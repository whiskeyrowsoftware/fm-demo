import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GooglePieChartComponent } from './components/google-pie-chart/google-pie-chart.component';
import { RouterModule } from '@angular/router';
import { GOOGLE_CHART_ROUTES } from './chart.routes';
import { ChartHomeComponent } from './components/home/home.component';
//Material Imports
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    GooglePieChartComponent,
    ChartHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(GOOGLE_CHART_ROUTES),
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule
  ]
})
export class ChartsModule { }
