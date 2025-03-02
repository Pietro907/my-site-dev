import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isRoot: boolean = true;

  //Creo un cotruttore per poter gestire la rotta
  constructor(private router: Router) {}

  // Prima del caricamento della pagina
  ngOnInit() {
    // metto sotto orsevazione un evento
    this.router.events.subscribe((event) => {
      //se l'evento è diventato la fine del caricamento della rotta
      //e con istanceof NavigationEnd lo diventa
      if (event instanceof NavigationEnd) {
        // Controllo se l'URL è quello principale
        this.isRoot = event.urlAfterRedirects === '/';
      }
      // altrimento isRoot diventa falso
    });
  }
  
}
