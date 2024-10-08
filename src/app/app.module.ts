import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from './store/counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './store/counter.effects';
import { stepReducer } from './store/step.reducer';
import { StepEffects } from './store/step.effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterControlsComponent,
  ],
  imports: [BrowserModule, StoreModule.forRoot({counter:counterReducer,step:stepReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ,FormsModule, EffectsModule.forRoot([CounterEffects,StepEffects])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
