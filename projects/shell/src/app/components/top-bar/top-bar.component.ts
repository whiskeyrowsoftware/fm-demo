import { Component } from '@angular/core';
import { environment } from 'projects/shell/src/environments/environment';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  projName = environment.projectName
  port = window.location.port
  compName: string = ''
  runTimeMode = environment.runtimeMode
  displayRunTime = environment.displayRunTime
  
  constructor() {
    this.compName = this.constructor.name; 
  }  
}
