import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-biography',
  imports: [RouterLink, RouterLinkActive, ButtonModule],
  templateUrl: './biography.component.html',
  styleUrl: './biography.component.scss'
})
export class BiographyComponent {

}
