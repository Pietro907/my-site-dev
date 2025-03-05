import { RenderMode, ServerRoute } from '@angular/ssr';
import { AppComponent } from './app.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {path: '', renderMode: RenderMode.Prerender},
  {path: 'table-projects', renderMode: RenderMode.Prerender},
  {path: 'card-projects', renderMode: RenderMode.Prerender},
  
];
