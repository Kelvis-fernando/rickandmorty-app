import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, CardComponent, FavoritesComponent],
  imports: [BrowserModule, AppRoutingModule, MatIconModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
