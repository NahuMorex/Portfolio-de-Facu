import { Component, EventEmitter, Output, signal, Signal } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-material-select',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './material-select.component.html',
  styleUrl: './material-select.component.css'
})
export class MaterialSelectComponent {

  idioma = 'espanol';

  @Output() idiomaEvent = new EventEmitter<Signal<string>>();

  cambioIdioma(idioma:string){
    this.idiomaEvent.emit(signal(idioma));
  }

}


