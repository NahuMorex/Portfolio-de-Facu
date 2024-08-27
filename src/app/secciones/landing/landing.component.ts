import { Component, Input } from '@angular/core';
import {ClipboardModule} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ClipboardModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  @Input() idioma='';

  email = "facundogaitansegura@gmail.com";

}
