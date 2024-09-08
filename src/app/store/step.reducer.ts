import { createReducer ,on} from "@ngrx/store";
import { changeStep, set } from "./step.actions";

const initialState=1;

export const stepReducer= createReducer(
  initialState,
  on(changeStep,(state,action)=>action.value),
  on(set,(state,action)=>action.value)
);
