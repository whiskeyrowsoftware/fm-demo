import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'projects/remote-03/src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  projName = environment.projectName
  port = window.location.port
  compName: string = ''

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.compName = this.constructor.name;  
  }
 
}
