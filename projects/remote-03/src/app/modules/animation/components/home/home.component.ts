import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'projects/remote-03/src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class AnimationHomeComponent {
  projName = environment.projectName
  port = window.location.port
  compName: string = ''

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.compName = this.constructor.name;  
  }
  loadAnimations(){
    this.router.navigateByUrl('/remote-03/animations/html5');
  }  
}
