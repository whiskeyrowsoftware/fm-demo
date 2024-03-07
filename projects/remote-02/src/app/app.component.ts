import { Component, Inject } from '@angular/core';
import { AppConfig, APP_CONFIG_TOKEN } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'remote-02';
  constructor(@Inject(APP_CONFIG_TOKEN) appConfig: AppConfig){
    
  }
}


