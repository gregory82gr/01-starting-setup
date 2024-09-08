import { Actions, createEffect, ofType } from "@ngrx/effects";
import { changeStep,initStep, set} from "./step.actions";
import { switchMap, tap, withLatestFrom,of } from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";



@Injectable()
export class StepEffects{

  loadStep=createEffect(()=>this.actions$.pipe(
    ofType(initStep),
    switchMap(()=>{
      const storedStep=localStorage.getItem('step');
      console.log('storedStep: ' + storedStep)
      if(storedStep){
        console.log('storedStep: ' + storedStep)
        return of(set({value: +storedStep}));
      }
      return of(set({value:0}));

    })
  ));

  saveStep=createEffect(()=>this.actions$.pipe(
    ofType(changeStep),
    withLatestFrom(this.store.select('step')),
    tap(([action,step])=>{
      console.log('Step: ' + step.toString());
      localStorage.setItem('step',step.toString());
    })
  ),
 {dispatch:false});

 constructor(private actions$: Actions,private store:Store<{counter:number,step:number}>){

 }

}
