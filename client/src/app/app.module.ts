import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscoverMoviesComponent } from './components/discover-movies/discover-movies.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { AddToWatchlistComponent } from './components/add-to-watchlist/add-to-watchlist.component';
import { WatchlistLinkComponent } from './components/watchlist-link/watchlist-link.component';
import { OverviewPageComponent } from './components/overview-page/overview-page.component';
import { WatchlistPageComponent } from './components/watchlist-page/watchlist-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscoverMoviesComponent,
    TopRatedComponent,
    AddToWatchlistComponent,
    WatchlistLinkComponent,
    OverviewPageComponent,
    WatchlistPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
