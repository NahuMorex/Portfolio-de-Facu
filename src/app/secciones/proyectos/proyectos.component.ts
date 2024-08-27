import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  inject,
  Input,
  model,
  Output,
  Signal,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { CheckboxComponent } from '../../components/checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { ChipsAutocompleteComponent } from "../../components/chips-autocomplete/chips-autocomplete.component";
import { MaterialCardComponent } from "../../components/material-card/material-card.component";
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CardComponent, CheckboxComponent, FormsModule, ChipsAutocompleteComponent, MaterialCardComponent, MatGridListModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {

  proyectos = [
    {
      titulo: "Medidor De Distancia Con Sensor Ultrasónico",
      imagen: "assets/fotos_proyectos/medidor_distancia.webp",
      descripcion: `Proyecto realizado en la Escuela Técnica Henry Ford

                    Nos pidieron diseñar y construir un proyecto en base a elementos de Arduino, que se encargue de realizar algún tipo de medición. Lo que nosotros decidimos fue construir, mediante diferentes componentes eléctricos, un medidor de distancia por ondas ultrasónicas.

                    El medidor funciona de la siguiente manera:
                    Mediante un sensor se envía una onda ultrasónica que, dentro de un rango especifico, chocará con el objeto a medir. Esta onda regresará y será tomada por un receptor del sensor.
                    Finalmente, el Arduino, que está conectado al dispositivo, realizará una ecuación en función del tiempo en que tardo en volver la onda para calcular la distancia del objeto.`,
      tecnologias: ['C++','Arduino IDE'],
      links: [
        {
          nombre: "Instructables",
          enlace: "https://www.instructables.com/Medidor-De-Distancia-Con-Sensor-Ultras%C3%B3nico/"
        }
      ]
    },
    {
      titulo: "Proyecto Integrador Argentina Programa",
      imagen: "assets/fotos_proyectos/arg-prog.webp",
      descripcion: `Proyecto realizado durante el curso de Argentina Programa 4.0.

                    Cuenta con:
                    - Tecnologías FrontEnd como HTML, CSS, Javascript, Typescript, Bootstrap y el framework Angular
                    - Tecnologías BackEnd como Java con el framework Spring Boot
                    - Base de datos relacional MySQL
                    - Git y Github para el versionado
                    - Docker para el deploy a un servidor`,
      tecnologias: ['HTML','CSS','JavaScript','Typescript','Bootstrap','Angular','Java','Spring Framework','Docker'],
      links: [
        {
          nombre: "GitHub Pages",
          enlace: "https://facundo177.github.io/PortfolioFrontEnd/"
        },
        {
          nombre: "Repo FrontEnd",
          enlace: "https://github.com/Facundo177/FrontEnd-Final"
        },
        {
          nombre: "Repo BackEnd",
          enlace: "https://github.com/Facundo177/BackEnd"
        }
      ]
    },
    {
      titulo: "SmartGlove",
      imagen: "assets/fotos_proyectos/smartglove.webp",
      descripcion: "Proyecto tecnológico realizado en grupo, con un enfoque social e innovador. Buscamos facilitar la comunicación entre personas que desconocen las técnicas de comunicación por señas sobre las manos y aquellos que padecen disminuciones en sus sentidos visuales y/o auditivos a través de una funcionalidad integral que aprovecha las capacidades sensoriales específicas de los pacientes, así como la practicidad de los celulares y teclados modernos para establecer un sistema de comunicación amigable entre los usuarios.",
      tecnologias: ['C++','Arduino IDE','ESP32'],
      links: [


      ]
    },
    {
      titulo: "Control de deudas",
      imagen: "assets/fotos_proyectos/deudas.webp",
      descripcion: `Este proyecto se centra en la contabilidad de una vivienda con múltiples inquilinos. Se registra y almacena información sobre los gastos comunes realizados por los inquilinos en nombre de una o más personas. El objetivo es analizar la evolución de las deudas de cada persona con la vivienda a lo largo del tiempo mediante la lectura, reestructuración y representación gráfica de los datos. Toda información relevante se encuentra almacenada en un archivo de texto, en un formato específico.

                    Involucra:
                    - Uso de librerías como MatplotLib y Numpy para la representación de datos.
                    - Manipulación de archivos.
                    - Aplicación de estructuras de datos adecuadas al problema.`,
      tecnologias: ['Python','Matplotlib'],
      links: [
        {
          nombre: "Repo código",
          enlace: "https://github.com/Facundo177/Registro-de-deudas"
        }
      ]
    },
    {
      titulo: "Web Fotografía",
      imagen: "assets/fotos_proyectos/web_fotografia.webp",
      descripcion: `Proyecto final para la graduación del programa Codo a Codo.

                    Involucra:
                    - Desarrollo de sitios web responsivos, siguiendo las mejores prácticas.
                    - Despliegue de proyectos web en servidores.
                    - Desarrollo de páginas interactivas utilizando JavaScript.
                    - Soluciones frontend que se comunique con un backend mediante un servicio.
                    - Comprensión de las metodologías ágiles y su aplicación en proyectos.
                    - Creación de bases de datos relacionales y consultas SQL avanzadas.
                    - Conocimientos en programación orientada a objetos en Java, además del trabajo con módulos, paquetes y librerías.
                    - Implementación de formularios y creación de un CRUD con Java puro.`,
      tecnologias: ['HTML','CSS','JavaScript','Bootstrap','Java','Tomcat'],
      links: [
        {
          nombre: "GitHub Pages",
          enlace: "https://facundo177.github.io/Grupo-1---CaC-JAVA---24104/index.html"
        },
        {
          nombre: "Repo FrontEnd",
          enlace: "https://github.com/Facundo177/Grupo-1---CaC-JAVA---24104"
        },
        {
          nombre: "Repo BackEnd",
          enlace: "https://github.com/Facundo177/Backend-JAVA-Grupo-1_CaC24104"
        }
      ]
    },
    {
      titulo: "Foro Hub - API REST",
      imagen: "assets/fotos_proyectos/foro_hub.webp",
      descripcion: `Proyecto Back End con Java: una API REST usando Spring.

                    La API se centra específicamente en los tópicos, y permite a los usuarios:
                    - Crear un nuevo tópico
                    - Mostrar todos los tópicos creados
                    - Mostrar un tópico específico
                    - Actualizar un tópico
                    - Eliminar un tópico Es lo que normalmente conocemos como CRUD (CREATE, READ, UPDATE, DELETE).

                    Además se aplicaron otros temas relacionados, como:
                    - La implementación de una base de datos relacional para la persistencia de la información
                    - Incorporación de un servicio de autenticación/autorización para restringir el acceso a la información`,
      tecnologias: ['Java','Postman','Insomnia','Spring Framework'],
      links: [
        {
          nombre: "Repo API REST",
          enlace: "https://github.com/Facundo177/Challenge-Foro-Hub__Spring-Boot"
        }
      ]
    }
  ]


  tecnologiasProyectos:string[] = Array.prototype.concat(...this.proyectos.map(proyecto => proyecto.tecnologias));

  todasLasTecnologias:string[] = Array.from(new Set(this.tecnologiasProyectos)).sort();

  filtroTecnologias:Signal<string[]> = signal([]);

  projects = this.todasLasTecnologias.toString();




  ngOnInit(){
    console.log(this.projects);
  }


  leerSelectorTecnologias(tecnologiasSeleccionadas:Signal<string[]>){
    this.filtroTecnologias = tecnologiasSeleccionadas;
  }


  proyectosAMostrar():Signal<{titulo:string, imagen:string, descripcion:string, tecnologias:string[], links:{nombre:string,enlace:string}[]}[]>{
    let todosLosProyectos = this.proyectos.slice();
    let filtro = this.filtroTecnologias();

    return signal(todosLosProyectos.filter(proyecto => proyecto.tecnologias.some(tecnologia => filtro.includes(tecnologia))));
  }



/*   onChange(event: any){
    for(let item of this.checkboxesTecnologias){
      if(item.tecnologia === event.target.name){
        item.activo = event.target.checked;
      }
    };
    console.log(this.checkboxesTecnologias);
  } */






/*
  compararTecnologias(tecnologias:string[]){
    for (const tecnologia of tecnologias) {
      for (const check of this.checkboxesTecnologias) {
        if (tecnologia === check.tecnologia && check.activo) {
          return check.activo;
        }
      };
    };
    return false;

  }


  checkboxesTecnologias:checkBox[] = [];

  getCheckboxes(){
    this.todasLasTecnologias.forEach(tecnologia => {
      let check = new checkBox(tecnologia, true);
      this.checkboxesTecnologias.push(check);
    });
  }

 */






/*   ngOnInit(){
    this.getCheckboxes();
  } */



/*
  ngAfterViewInit(){
    this.getCheckboxes();
  }


  getCheck(event:boolean){}
*/


}



/* class checkBox {
  tecnologia:string;
  activo:boolean;

  constructor(tecnologia:string, activo:boolean){
    this.tecnologia = tecnologia;
    this.activo = activo;
  }
} */
