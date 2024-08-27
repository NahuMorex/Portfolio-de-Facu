import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
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
import { FormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-chips-autocomplete',
  standalone: true,
  templateUrl: './chips-autocomplete.component.html',
  styleUrl: './chips-autocomplete.component.css',
  imports: [
    MatFormFieldModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})

export class ChipsAutocompleteComponent {

  @Input() placeholder:string = "";
  @Input() label:string = "";
  @Input() projects:string = "";
  @Output() selectorTecnologiasEvent = new EventEmitter<Signal<string[]>>();

  todasLasTecnologias:string[] = [];


  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly currentFruit = model('');
  readonly fruits = signal(this.todasLasTecnologias.slice());
  allFruits: string[] = this.todasLasTecnologias.slice();
  readonly filteredFruits = computed(() => {
    const currentFruit = this.currentFruit().toLowerCase();
    return currentFruit
      ? this.allFruits.filter((fruit) =>
          fruit.toLowerCase().includes(currentFruit)
        )
      : this.allFruits.slice();
  });

  readonly announcer = inject(LiveAnnouncer);


  ngOnInit(){
    this.todasLasTecnologias = this.projects.split(",");
    this.fruits.set(this.todasLasTecnologias.slice());
    this.allFruits = this.todasLasTecnologias.slice();
    this.selectorTecnologiasEvent.emit(this.fruits);
  }


  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      if (!this.fruits().includes(value) && this.allFruits.includes(value)) {
        this.fruits.update((fruits) => [...fruits, value]);
      }
    }

    // Clear the input value
    this.currentFruit.set('');
    this.selectorTecnologiasEvent.emit(this.fruits);
  }

  remove(fruit: string): void {
    this.fruits.update((fruits) => {
      const index = fruits.indexOf(fruit);
      if (index < 0) {
        return fruits;
      }

      fruits.splice(index, 1);
      this.announcer.announce(`Removed ${fruit}`);
      return [...fruits];
    });
    this.selectorTecnologiasEvent.emit(this.fruits);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (!this.fruits().includes(event.option.viewValue)) {
      this.fruits.update((fruits) => [...fruits, event.option.viewValue]);
    }
    this.currentFruit.set('');
    event.option.deselect();
  }
}
