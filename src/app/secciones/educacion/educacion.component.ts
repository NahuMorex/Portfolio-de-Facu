import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ChipsAutocompleteComponent } from "../../components/chips-autocomplete/chips-autocomplete.component";
import { HorizontalCardComponent } from '../../components/horizontal-card/horizontal-card.component';


@Component({
  selector: 'app-educacion',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, ChipsAutocompleteComponent, HorizontalCardComponent],
  templateUrl: './educacion.component.html',
  styleUrl: './educacion.component.css'
})
export class EducacionComponent {

  binding:boolean = true;

  showComponent = false;


  educaciones = [
    {
      imagen: "",
      titulo: "Licenciatura en Ciencias de la Computación",
      descripcion: "",
      institucion: "Universidad de Buenos Aires",
      fecha: "2024 - PRESENTE"
    },
    {
      imagen: "",
      titulo: "Técnico Electromecánico",
      descripcion: "",
      institucion: "Escuela Técnica Henry Ford",
      fecha: "2017 - 2023"
    }
  ]

}



