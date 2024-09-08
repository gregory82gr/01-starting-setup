import { Component, OnInit } from '@angular/core';
import { Observable  } from 'rxjs';


import { Store } from '@ngrx/store';
import { selectCount, selectDoubleCount } from '../store/counter.selectors';
import { AppService } from '../app.service';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  count$: Observable<number>;
  doubleCount$: Observable<number>;
  step: number=1;

  constructor(private store: Store<{counter:number}>,private appService:AppService ) {
    this.count$=store.select(selectCount);
    this.doubleCount$=store.select(selectDoubleCount);
  }

 ngOnInit(): void {
   this.appService.activatedSubject.subscribe(step=>{
    this.step=step;
   })
 }
}
