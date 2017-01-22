import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>Hello {{name}}</h1>
      <fa-databinding></fa-databinding>
      <fa-other></fa-other>
      <fa-another>
        <div>
          <h1>Ciaonissimo!</h1>
          <p>Mondone</p>
        </div>
      </fa-another>
      <fa-another>
        <p>Sumerissimo</p>
      </fa-another>
      <fa-lifecycle [testChildValue]="changingValue">
        <h3>{{testValue}}</h3>
      </fa-lifecycle>
      <button (click)="testValue='cambiato'">Cambia il valore della variabile padre</button>
      <button (click)="changingValue='il valore dal padre viene cambiato'">Cambia valore variabile input dal padre</button>
    `,
  styles: [`
      h1{
        color: red;
      }
  `]
})
export class AppComponent  {
  name = 'Tommy';
  testValue = 'valore padre';
  changingValue: string = 'valore inziale dato dal padre';
}
