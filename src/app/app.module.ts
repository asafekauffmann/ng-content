import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './nav/main/main.component';
import { TestmainComponent } from './test/testmain/testmain.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavComponent,
    HomeComponent,
    MainComponent,
    TestmainComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
