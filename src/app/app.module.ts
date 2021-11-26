import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './nav/main/main.component';
import { AgendaComponent } from './test/agenda/agenda.component';
import { AtenderComponent } from './test/atender/atender.component';
import { DadosComponent } from './test/dados/dados.component';
import { FilaComponent } from './test/fila/fila.component';
import { ProntuarioComponent } from './test/prontuario/prontuario.component';
import { ModalComponent } from './modals/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavComponent,
    HomeComponent,
    MainComponent,
    AgendaComponent,
    AtenderComponent,
    DadosComponent,
    FilaComponent,
    ProntuarioComponent,
    ModalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
