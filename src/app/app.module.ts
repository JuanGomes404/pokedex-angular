import { MaterialModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PokeDetailsComponent } from './components/poke-details/poke-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokeSearchComponent } from './components/poke-search/poke-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokeDetailsComponent,
    PokeListComponent,
    PokeSearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
