import { Component } from '@angular/core'
import { environment } from 'projects/shell/src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  projName = environment.projectName
  port = window.location.port
  compName: string = ''
  runTimeMode = environment.runtimeMode
  displayRunTime = environment.displayRunTime
  
  constructor() {
    this.compName = this.constructor.name; 
  }  
}
