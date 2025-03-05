import { Routes } from '@angular/router';

/* import Component */
import { AppComponent } from './app.component';
import { TableProjectsComponent } from '../component/table-projects/table-projects.component';
import { CardProjectsComponent } from '../component/card-projects/card-projects.component';
import { HomeComponent } from '../component/home/home.component';



export const routes: Routes = [
   {path: '', component: HomeComponent},
   {path: 'home', component: HomeComponent},
   {path: 'table-projects', component: TableProjectsComponent},
   {path: 'card-projects', component: CardProjectsComponent},
];
