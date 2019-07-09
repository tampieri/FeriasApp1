import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EquipeComponent } from './pages/equipe/equipe.component';
import { EquipeService } from '../app/services/equipe.service';

@NgModule({
  declarations: [
    AppComponent,
    EquipeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EquipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
