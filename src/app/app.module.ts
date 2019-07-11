import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EquipeComponent } from './pages/equipe/equipe.component';
import { EquipeService } from '../app/services/equipe.service';
import { FuncionarioService } from './services/funcionario.service';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { FeriasComponent } from './pages/ferias/ferias.component';
import { FeriasService } from './services/ferias.service';

@NgModule({
  declarations: [
    AppComponent,
    EquipeComponent,
    FuncionarioComponent,
    FeriasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EquipeService, FuncionarioService, FeriasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
