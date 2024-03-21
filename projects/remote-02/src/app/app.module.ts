import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OpenAIModule } from './modules/open-ai/open-ai.module';
import { HomeComponent } from './components/home/home.component';
import { REMOTE_ROUTES } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(REMOTE_ROUTES),
    OpenAIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
