import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment,decrement } from '../store/counter.actions';
import { AppService } from '../app.service';


@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {

  step:number = 1;

  constructor(private store: Store ,private appService:AppService) {}

  increment() {
    this.store.dispatch(increment({value:this.step}))
  }

  decrement() {
    this.store.dispatch(decrement({value:this.step}))
  }

  onChange(event:any){
    console.log(event.target.value);
    this.appService.activatedSubject.next(event.target.value);
  }
}
