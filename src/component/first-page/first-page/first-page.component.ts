import { Component } from '@angular/core';
import { HeaderComponent } from "../../macro-component/header/header.component";
import { MainComponent } from "../../macro-component/main/main.component";
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-first-page',
  imports: [HeaderComponent, MainComponent, RouterOutlet],
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.scss'
})


export class FirstPageComponent {

}


