import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { REMOTE_ROUTES } from './open-ai.routes';
import { OpenAIHomeComponent } from './components/home/home.component';
import { ImageAiComponent } from './components/image-ai/image-ai.component';
import { TextAiComponent } from './components/text-ai/text-ai.component';
import { OpenAiDataService } from './services/open-ai.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    OpenAIHomeComponent,
    ImageAiComponent,
    TextAiComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(REMOTE_ROUTES),
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule
  ],
  providers: [OpenAiDataService],
})
export class OpenAIModule { }
