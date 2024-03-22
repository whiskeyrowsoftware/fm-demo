import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AnimationModule } from './modules/animation/animation.module';
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
    AnimationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
