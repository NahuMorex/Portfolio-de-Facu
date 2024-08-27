import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FlujoComponent } from "./controllers/flujo/flujo.component";
import { PropiedadesComponent } from './controllers/propiedades/propiedades.component';
import { InicioComponent } from "./secciones/inicio/inicio.component";
import { ConocimientosComponent } from "./secciones/conocimientos/conocimientos.component";
import { ExperienciaComponent } from "./secciones/experiencia/experiencia.component";
import { EducacionComponent } from "./secciones/educacion/educacion.component";
import { ProyectosComponent } from "./secciones/proyectos/proyectos.component";
import { NavbarComponent } from "./secciones/navbar/navbar.component";
import { FooterComponent } from "./secciones/footer/footer.component";
import { LandingComponent } from "./secciones/landing/landing.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FlujoComponent, PropiedadesComponent, InicioComponent, ConocimientosComponent, ExperienciaComponent, EducacionComponent, ProyectosComponent, NavbarComponent, FooterComponent, LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  idioma = '';

  obtenerIdioma(idioma:string){
    this.idioma = idioma;
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event:Event){
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  }


}
