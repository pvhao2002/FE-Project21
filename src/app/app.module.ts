import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './client/page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {AdminModule} from "./admin/admin.module";
import {ClientModule} from "./client/client.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    ClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
