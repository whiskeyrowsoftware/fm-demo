import { Component } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'projects/remote-02/src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class OpenAIHomeComponent {
  projName = environment.projectName
  port = window.location.port
  compName: string = ''

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.compName = this.constructor.name;  
  }
  loadImageAI(){
    this.router.navigateByUrl('/remote-02/open-ai/image-ai');
  }  
  loadTextAI(){
    this.router.navigateByUrl('/remote-02/open-ai/text-ai');
  }
}
