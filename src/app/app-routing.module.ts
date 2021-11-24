import { AtenderComponent } from './test/atender/atender.component';
import { AgendaComponent } from './test/agenda/agenda.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
      path: '', component: HomeComponent
   },
   {
      path: 'test', component: TestComponent,
      children:[
         {
            path: 'test/agenda', component: AgendaComponent, outlet: 'details'
         },
         {
            path: 'atender', component: AtenderComponent
         }
      ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
