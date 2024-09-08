import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment,decrement } from '../store/counter.actions';
import { AppService } from '../app.service';
import { changeStep } from '../store/step.actions';
import { selectStep } from '../store/step.selectors';


@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent  implements  OnInit{

  step:number = 1;

  ngOnInit(): void {
    let x = localStorage.getItem('step');
    if(x!=null)
    this.step=+x;
  }

  constructor(private store: Store ,private appService:AppService) {}

  increment() {
    this.store.dispatch(increment({value:this.step}))
  }

  decrement() {
    this.store.dispatch(decrement({value:this.step}))
  }

  onChange(event:any){
    console.log(event.target.value);
    //this.appService.activatedSubject.next(event.target.value);
    this.store.dispatch(changeStep({value:+event.target.value}));
  }
}
