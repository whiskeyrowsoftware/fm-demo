import { InjectionToken } from '@angular/core';

export interface AppConfig {
  openAIKey: string,
  wrsApiUrl: string
}

export const APP_CONFIG_TOKEN = new InjectionToken<AppConfig>('app.config');