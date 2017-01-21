import { Component } from '@angular/core';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  titolo = 'Titolone';
  numero = 2;

  fatherGetChildMessage(message:string){
    alert("Mio figlio mi ha lanciato: "+message);
  }

}
