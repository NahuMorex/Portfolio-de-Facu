import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() imagen = "";
  @Input() titulo = "";
  @Input() descripcion = "";
  @Input() tecnologias:string[] = [];
  @Input() links:{nombre:string,enlace:string}[] = [];

}
