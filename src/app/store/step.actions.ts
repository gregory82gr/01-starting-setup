import { createAction, props } from "@ngrx/store";

export const initStep= createAction(
  '[Step] Init'
  );

  export const set =createAction(
    '[Step] Set',
     props<{value:number}>()
  );

export const changeStep =createAction(
  '[Step] ChangeStep',
   props<{value:number}>()
);
