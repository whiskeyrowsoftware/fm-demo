import { Component, AfterViewInit } from '@angular/core';
import { environment } from '../environments/environment';
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
