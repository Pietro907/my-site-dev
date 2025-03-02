import { RenderMode, ServerRoute } from '@angular/ssr';
import { AppComponent } from './app.component';
import { ProjetsComponent } from '../component/projets/projets.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {path: '', renderMode: RenderMode.Prerender},
  {path: 'projects', renderMode: RenderMode.Prerender},
  
];
