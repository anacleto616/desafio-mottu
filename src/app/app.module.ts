import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { NgIconsModule } from '@ng-icons/core';
import { matFavorite, matFavoriteBorder, matHome } from '@ng-icons/material-icons/baseline';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    HeaderComponent,
    NotFoundComponent,
    CharacterCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgIconsModule.withIcons({ matHome, matFavorite, matFavoriteBorder }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
