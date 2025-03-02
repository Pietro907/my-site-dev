// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainComponent } from '../component/macro-component/main/main.component';
import { ProjetsComponent } from '../component/projets/projets.component';

@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    MainComponent,
    ProjetsComponent,
    BrowserModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
