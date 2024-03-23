import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule, RouterModule } from './app-routing.module'

//Material Imports
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatMenuModule } from '@angular/material/menu'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';


// Component Imports
import { AppComponent } from './app.component'
import { TopBarComponent } from './components/top-bar/top-bar.component'
import { AboutComponent } from './components/about/about.component'
import { HomeComponent } from './components/home/home.component'
import { Rm01StandaloneComponent } from './components/rm01-standalone/rm01-standalone.component'

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AboutComponent,
    HomeComponent,
    Rm01StandaloneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
