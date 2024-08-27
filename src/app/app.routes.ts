import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProyectosComponent } from './secciones/proyectos/proyectos.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'proyectos',
    component: ProyectosComponent,
  },
  {
    path: '**',
    component: ProyectosComponent,
  }

];
