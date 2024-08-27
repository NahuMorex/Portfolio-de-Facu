import {ChangeDetectionStrategy, Component, Input, signal, Signal} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-material-card',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './material-card.component.html',
  styleUrl: './material-card.component.css'
})
export class MaterialCardComponent {

  @Input() imagen = "";
  @Input() titulo = "";
  @Input() descripcion = "";
  @Input() tecnologias:string[] = [];

  @Input() mostrarCarta:Signal<boolean> = signal(true);
}





