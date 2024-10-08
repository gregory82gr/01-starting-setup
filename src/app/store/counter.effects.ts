import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment ,init, set} from "./counter.actions";
import { switchMap, tap, withLatestFrom,of } from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";


@Injectable()
export class CounterEffects{

  loadCount=createEffect(()=>this.actions$.pipe(
    ofType(init),
    switchMap(()=>{
      const storedCounter=localStorage.getItem('count');
      console.log('storedCounter: ' + storedCounter)
      if(storedCounter){
        console.log('storedCounter1: ' + storedCounter)
        return of(set({value: +storedCounter}));
      }
      return of(set({value:0}));

    })
  ));

  saveCount=createEffect(()=>this.actions$.pipe(
    ofType(increment,decrement),
    withLatestFrom(this.store.select('counter')),
    tap(([action,counter])=>{
      console.log('Counter: ' + counter.toString());
      localStorage.setItem('count',counter.toString());
    })
  ),
 {dispatch:false});

  constructor(private actions$: Actions,private store:Store<{counter:number,step:number}>){

  }
}
