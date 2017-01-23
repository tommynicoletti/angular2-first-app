import { Component,
         Input,
         OnInit,
         OnChanges,
         DoCheck,
         AfterContentInit,
         AfterContentChecked,
         AfterViewInit,
         AfterViewChecked,
         OnDestroy,
         ViewChild,
         ContentChild
} from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <ng-content></ng-content>
    <p #testChildReference>{{testChildValue}}</p>
    <h4>{{testChildReference.textContent}}</h4>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input()
  testChildValue: string = "valore figlio iniziale";

  @ViewChild('testChildReference')
  testChildReference: string;

  @ContentChild('fatherElement')
  fatherElement: string;

  constructor() { }

  ngOnInit() {
    this.log("ngOnInit");
  }

  ngOnChanges(){
    this.log("ngOnChanges");
  }

  ngDoCheck(){
    this.log("ngDoCheck");
  }

  ngAfterContentInit(){
    this.log("ngAfterContentInit");
    this.log("Local Reference:");
    this.log(this.testChildReference);
    this.log("Parent Reference:")
    this.log(this.fatherElement);

  }

  ngAfterContentChecked(){
    this.log("ngAfterContentChecked");
  }

  ngAfterViewInit(){
    this.log("ngAfterViewInit");
    this.log(this.testChildReference);
  }

  ngAfterViewChecked(){
    this.log("ngAfterViewChecked");
  }

  ngOnDestroy(){
    this.log("ngOnDestroy");
  }

  private log(hook: string){
    console.log(hook);
  }
}
