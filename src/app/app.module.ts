import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EcoScoreComponent } from './eco-score/eco-score.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EcoScoreIconComponent } from './eco-score-icon/eco-score-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    EcoScoreComponent,
    EcoScoreIconComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
