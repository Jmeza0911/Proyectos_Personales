import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './Pokemon/Components/navbar/navbar.component';
import { SidebarComponent } from './Pokemon/Components/sidebar/sidebar.component';
import { TarjetaPokemonComponent } from './Pokemon/Components/tarjeta-pokemon/tarjeta-pokemon.component';
import { ErrorPageComponent } from './Pokemon/Components/error-page/error-page.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    TarjetaPokemonComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
