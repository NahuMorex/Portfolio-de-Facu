import { Component, Input } from '@angular/core';
import {ClipboardModule} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ClipboardModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  @Input() idioma='';

  email = "facundogaitansegura@gmail.com";
}
