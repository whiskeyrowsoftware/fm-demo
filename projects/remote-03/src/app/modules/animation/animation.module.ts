import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { REMOTE_ROUTES } from './animation.routes';
import { AnimationHomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AnimationHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(REMOTE_ROUTES),
  ]
})
export class AnimationModule { }
