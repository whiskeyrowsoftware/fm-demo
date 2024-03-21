import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
@Component({
  selector: 'app-my-stand-alone',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './my-stand-alone.component.html',
  styleUrls: ['./my-stand-alone.component.scss']
})
export class MyStandAloneComponent {

}
