import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { environment } from 'projects/remote-01/src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class ChartHomeComponent {
  projName = environment.projectName
  port = window.location.port
  compName: string = ''

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.compName = this.constructor.name;  
  }
  loadChart(){
    this.router.navigateByUrl('/remote-01/charts/google-pie-chart');
  }  
  loadStandAlone(){
    this.router.navigateByUrl('/remote-01/charts/stand-alone-component');
  }
}
