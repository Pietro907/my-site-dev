// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TableProjectsComponent } from '../component/table-projects/table-projects.component';
import { CardProjectsComponent } from '../component/card-projects/card-projects.component';


@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    BrowserModule,
    TableProjectsComponent,
    CardProjectsComponent,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
