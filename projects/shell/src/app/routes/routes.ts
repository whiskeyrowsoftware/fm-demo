import { Routes } from '@angular/router'
import { loadRemoteModule } from '@angular-architects/module-federation'
import { HomeComponent } from '../components/home/home.component'
import { AboutComponent } from '../components/about/about.component'
import { NotFoundComponent } from '../components/not-found/not-found.component'
import { Rm01StandaloneComponent } from '../components/rm01-standalone/rm01-standalone.component'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'remote-01/charts',
    loadChildren: async () =>
      await loadRemoteModule({
        type: 'manifest',
        remoteName: 'remote-01',
        exposedModule: './Google-Chart-Module'
      }).then(m => m.ChartsModule)
        .catch(async () => {
          return await import('../fm-dynamic-errors/fm-dynamic-errors.module').then((m) => m.FmDynamicErrorsModule)
        })
  },
  {
    path: 'stand-alone-component',
    loadChildren: async () =>
      await loadRemoteModule({
        type: 'manifest',
        remoteName: 'remote-01',
        exposedModule: './My-Stand-Alone-Component'
      })
        .then(m => m.MyStandAloneComponent)
        .catch(async () => {
          return await import('../fm-dynamic-errors/fm-dynamic-errors.module').then((m) => m.FmDynamicErrorsModule)
        })
  },
  {
    path: 'remote-02/open-ai',
    loadChildren: async () =>
      await loadRemoteModule({
        type: 'manifest',
        remoteName: 'remote-02',
        exposedModule: './Remote-02-OpenAI-Module',
      }).then(m => m.OpenAIModule)
        .catch(async () => {
          return await import('../fm-dynamic-errors/fm-dynamic-errors.module').then((m) => m.FmDynamicErrorsModule)
        })
  },
  {
    path: 'remote-03',
    loadChildren: async () =>
      await loadRemoteModule({
        type: 'manifest',
        remoteName: 'remote-03',
        exposedModule: './Component',
      }).then(m => m.AppComponent)
        .catch(async () => {
          return await import('../fm-dynamic-errors/fm-dynamic-errors.module').then((m) => m.FmDynamicErrorsModule)
        })
  },

  {
    path: 'programatically-load-stand-alone-component',
    component: Rm01StandaloneComponent,
    pathMatch: 'full'
  },

  {
    path: '**',
    component: NotFoundComponent
  }
]
