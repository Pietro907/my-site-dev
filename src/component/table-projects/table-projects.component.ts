import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-table-projects',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './table-projects.component.html',
  styleUrl: './table-projects.component.scss'
})
export class TableProjectsComponent {
}
