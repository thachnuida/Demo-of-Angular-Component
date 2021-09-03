import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';
import { UsersTableComponent } from './users-table/users-table.component';

import  { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    TableModule
  ],
  declarations: [
    AppComponent,
    UsersTableComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { 
  constructor(private injector: Injector) {
    const el = createCustomElement(UsersTableComponent, { injector });
    customElements.define('users-table', el);
  }

  ngDoBootstrap() {}
}
