import { Routes } from '@angular/router';

/* import Component */
import { AppComponent } from './app.component';
import { ProjetsComponent } from '../component/projets/projets.component';



export const routes: Routes = [
   {path: '', component: AppComponent},
   {path: 'projects', component: ProjetsComponent},
];
