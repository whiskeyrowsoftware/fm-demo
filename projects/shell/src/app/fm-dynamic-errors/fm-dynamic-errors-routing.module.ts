import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes/routes';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmDynamicErrorsRoutingModule {
}

export { RouterModule };

