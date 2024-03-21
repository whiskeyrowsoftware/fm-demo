import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { REMOTE_ROUTES } from './open-ai.routes';
import { OpenAIHomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    OpenAIHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(REMOTE_ROUTES),
  ]
})
export class OpenAIModule { }
