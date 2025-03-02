import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../component/macro-component/header/header.component";
import { MainComponent } from "../component/macro-component/main/main.component";
import { FirstPageComponent } from "../component/first-page/first-page/first-page.component";

@Component({
  selector: 'app-root',
  imports: [FirstPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-site-dev';
}
