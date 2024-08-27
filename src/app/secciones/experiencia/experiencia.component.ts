import { Component } from '@angular/core';
import { HorizontalCardComponent } from "../../components/horizontal-card/horizontal-card.component";

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [HorizontalCardComponent],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperienciaComponent {

  experiencia = [
    {
      id: 1,
      imagen: "assets/fotos_experiencias/ford-argentina.webp",
      puesto: "Practicante en el área de IT",
      empresa: "Ford Argentina SCA",
      fecha: "ABRIL 2023 - DICIEMBRE 2023",
      ubicacion: "Ricardo Rojas, Buenos Aires",
      descripcion: `Práctica profesionalizante donde desarrollé habilidades en mantenimiento y optimización
      de sistemas informáticos, brindando soporte técnico de calidad y mejorando la experiencia del cliente
      a través de una efectiva documentación de procedimientos.

      Participé del proceso de PCR (PC Renewal), en el que me encargué de proporcionar las actualizaciones
      necesarias de hardware y software a los empleados de la planta, acompañándolos en la adaptación y
      garantizando la preservación y disponibilidad de sus datos en la transición.`
    }
  ]

}
