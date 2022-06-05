import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxMaterialRatingModule} from 'ngx-material-rating';
import { YouTubePlayerModule } from "@angular/youtube-player";


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MainInterceptor} from "./main.interceptor";
import {HeaderComponent} from './components/header/header.component';
import {MoviesListCardComponent} from './components/movies-list-card/movies-list-card.component';
import {MoviesListComponent} from './components/movies-list/movies-list.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {UserInfoComponent} from './components/user-info/user-info.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {GenresListComponent} from './components/genres-list/genres-list.component';
import {GenreBadgeComponent} from './components/genre-badge/genre-badge.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MovieInfoComponent} from './components/movie-info/movie-info.component';
import {ImageComponent} from './components/image/image.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VideosComponent } from './components/videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListCardComponent,
    MoviesListComponent,
    NotFoundComponent,
    MainLayoutComponent,
    UserInfoComponent,
    GenresListComponent,
    GenreBadgeComponent,
    MovieInfoComponent,
    ImageComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMaterialRatingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    NgbModule,
    YouTubePlayerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
