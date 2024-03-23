import { Routes } from '@angular/router';
import { OpenAIHomeComponent } from './components/home/home.component'
import { ImageAiComponent } from './components/image-ai/image-ai.component';
import { TextAiComponent } from './components/text-ai/text-ai.component';


export const REMOTE_ROUTES: Routes = [
    {
      path: '',
      component: OpenAIHomeComponent
    },
    {
      path: 'image-ai',
      component: ImageAiComponent
    },
    {
      path: 'text-ai',
      component: TextAiComponent
    },
];