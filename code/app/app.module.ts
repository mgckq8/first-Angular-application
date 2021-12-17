import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    NavBarComponent,
    WatchlistComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: MovieListComponent },
      { path: 'watchlist', component: WatchlistComponent },
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
