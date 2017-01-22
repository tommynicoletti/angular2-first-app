import { Component,
         Input,
         OnInit,
         OnChanges,
         DoCheck,
         AfterContentInit,
         AfterContentChecked,
         AfterViewInit,
         AfterViewChecked,
         OnDestroy
} from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <ng-content></ng-content>
    <h4>{{testChildValue}}</h4>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @Input() testChildValue: string = "valore figlio iniziale";

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
  }

  ngAfterContentChecked(){
    this.log("ngAfterContentChecked");
  }

  ngAfterViewInit(){
    this.log("ngAfterViewInit");
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
