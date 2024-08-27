import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialSelectComponent } from "../../components/material-select/material-select.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MaterialSelectComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  idioma = 'espanol';
  @Output() idiomaEvent = new EventEmitter<string>();

  cambiarIdioma(idioma:string){
    this.idioma = idioma;
    this.idiomaEvent.emit(idioma);
  }

}
