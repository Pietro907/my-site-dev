import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../component/macro-component/header/header.component";
import { MainComponent } from "../component/macro-component/main/main.component";

@Component({
  selector: 'app-root',
  imports: [/* RouterOutlet ,*/ HeaderComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-site-dev';
}
