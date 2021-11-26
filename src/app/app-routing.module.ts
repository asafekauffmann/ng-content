import { ProntuarioComponent } from './test/prontuario/prontuario.component';
import { FilaComponent } from './test/fila/fila.component';
import { DadosComponent } from './test/dados/dados.component';
import { AtenderComponent } from './test/atender/atender.component';
import { AgendaComponent } from './test/agenda/agenda.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
      path: '', redirectTo: 'home', pathMatch: 'full'
   },
   {
      path: 'home', component: HomeComponent
   },
   {
      path: 'test', component: TestComponent, 
      children: [
         { path: 'agenda', component: AgendaComponent },
         { path: 'atender', component: AtenderComponent },
         { path: 'dados', component: DadosComponent },
         { path: 'fila', component: FilaComponent },
         { path: 'prontuario', component: ProntuarioComponent },
      ],
   },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
