import { APP_INITIALIZER, NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_CONFIG_TOKEN,AppConfig } from './app.config';
import { Observable, tap } from 'rxjs';

const configURL: string ="/config";
//const configURL: string ="./assets/app-config-info.json";

const MY_APP_CONFIG: AppConfig = {
  openAIKey: '',
  wrsApiUrl: ''
};
function initializeAppFactory(httpClient: HttpClient): () => Observable<AppConfig> {
  return () =>
    httpClient.get<AppConfig>(configURL).pipe(
      tap((config) =>
        Object.assign(MY_APP_CONFIG, {
          ...config,
          openAIKey: config.openAIKey,
          wrsApiUrl: `https://${config.wrsApiUrl}`,
        })
      ) 
    );
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { 
      provide: APP_INITIALIZER, 
      useFactory: initializeAppFactory, 
      deps: [HttpClient], 
      multi: true 
    },
    { provide: APP_CONFIG_TOKEN, useValue: MY_APP_CONFIG },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
  }
}


