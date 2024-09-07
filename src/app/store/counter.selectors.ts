import { state } from "@angular/animations";
import { createSelector } from "@ngrx/store";

export const selectCount= (state:{counter:number})=>{
  if(Math.abs(state.counter)>9) return 10
  else return state.counter;
};
export const selectDoubleCount= createSelector(
 selectCount,
 (state)=> state *2
);
