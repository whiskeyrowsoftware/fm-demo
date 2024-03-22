import { Component } from '@angular/core';
import { environment } from 'projects/remote-01/src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  projName = environment.projectName
  port = window.location.port
  compName: string = ''
  
  constructor() {
    this.compName = this.constructor.name;  
  }  
}
