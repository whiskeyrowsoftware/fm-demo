import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FmModNotFoundComponent } from './components/not-found/not-found.component';
import { FmDynamicErrorsRoutingModule, RouterModule } from './fm-dynamic-errors-routing.module';
@NgModule({
  declarations: [FmModNotFoundComponent],
  imports: [
    CommonModule,
    FmDynamicErrorsRoutingModule,
    RouterModule
  ]
})
export class FmDynamicErrorsModule { }
