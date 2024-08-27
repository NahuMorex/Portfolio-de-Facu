import { Component } from '@angular/core';

@Component({
  selector: 'app-flujo',
  standalone: true,
  imports: [],
  templateUrl: './flujo.component.html',
  styleUrl: './flujo.component.css'
})
export class FlujoComponent {

    ver = false;

    proyectos = [
      {
        id:1,
        nombre:'SmartGlove'
      },
      {
        id:2,
        nombre:'Proyecto final integrador'
      },
      {
        id:3,
        nombre:'Web Fotografía'
      },
      {
        id:4,
        nombre:'Foro Hub'
      },
      {
        id:5,
        nombre:'Calculo de deudas'
      }
    ]


    mostrar(){
        this.ver = !this.ver;
    }

}
