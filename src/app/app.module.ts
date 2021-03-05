import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GeographiqueComponent } from './geographique/geographique.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GeographiqueComponent,
    CatalogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
