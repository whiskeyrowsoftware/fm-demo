import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  name: string = '';
  title: string = '';
  message: string =  ''

  constructor(){
    this.name = this.constructor.name
    this.title = 'remote-02'
    this.message = `[${this.name}] The only ones that can see this page are users with the ability to load the remote by itself`
  }
}
