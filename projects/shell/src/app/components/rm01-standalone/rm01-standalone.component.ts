import { loadRemoteEntry, loadRemoteModule } from '@angular-architects/module-federation';
import { Component, signal, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-rm01-standalone',
  templateUrl: './rm01-standalone.component.html',
  styleUrls: ['./rm01-standalone.component.scss']
})
export class Rm01StandaloneComponent  {
  @ViewChild('placeHolder', {read:ViewContainerRef})
  viewContainer!:ViewContainerRef;
  showError = signal(false);

  constructor (){
    this.showError.set(false);
  }
 
  async load(): Promise<void>{
    this.showError.set(false);
    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './My-Stand-Alone-Component'
    })
    .then(m => {
      console.log('creating remote component programatically...');
      const ref = this.viewContainer.createComponent(m.MyStandAloneComponent);
    })
    .catch(err => {
      this.showError.set(true);
    });
  }
}