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
import { MovieDetailsPageComponent } from './components/movie-details-page/movie-details-page.component';
import { NgForNumberPipe } from './pipes/ng-for-number.pipe';
import { CastAndCrewComponent } from './components/cast-and-crew/cast-and-crew.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { TextEllipsisPipe } from './pipes/text-ellipsis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DiscoverMoviesComponent,
    TopRatedComponent,
    AddToWatchlistComponent,
    WatchlistLinkComponent,
    OverviewPageComponent,
    WatchlistPageComponent,
    MovieDetailsPageComponent,
    NgForNumberPipe,
    CastAndCrewComponent,
    ReviewsComponent,
    TextEllipsisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
