import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {

  @Input() id = "";
  @Input() name = "";

  checked = true;
  @Output() checkEvent = new EventEmitter<boolean>();

  onChange(){
    this.checked = !this.checked;
    this.checkEvent.emit(this.checked);
  }
}
