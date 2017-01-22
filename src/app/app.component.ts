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
      <fa-lifecycle></fa-lifecycle>
    `,
  styles: [`
      h1{
        color: red;
      }
  `]
})
export class AppComponent  {
  name = 'Tommy';
}
