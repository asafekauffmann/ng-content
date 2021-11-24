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
      path: 'test', component: TestComponent, children: [
         {path: 'agenda', component: AgendaComponent, outlet: 'detail'},
         {path: 'atender', component: AtenderComponent, outlet:  'detail'}
      ]
   }



   //{
   //   path: 'test/agenda', component: AgendaComponent, outlet: 'detail'
   //},
   //{
   //   path: 'test/atender', component: AtenderComponent, outlet: 'detail'
   //}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
