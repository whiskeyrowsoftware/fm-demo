import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  projName = environment.projectName
  port = window.location.port
  compName: string = ''

  constructor() {
    this.compName = this.constructor.name;  
  }  
}
