import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onClicked()">Premimi</button>
    <button (click)="emitEvent()">Emetti evento</button>
  `,
  styles: []
})
export class EventBindingComponent {
  // Il tipo generico dichiarato è importante per la funzione emit
  // Il decoratore @Output() consente all'evento di essere emesso al di fuori del componente
  @Output() cliccato = new EventEmitter<string>();
  onClicked(){
    alert('Hai clicckato... brà!');
  }
  emitEvent(){
    // Alla funzione emit viene utilizzato il tipo di dato dichiarato prima come tipo generico
    this.cliccato.emit("Funzionella");
  }
}
