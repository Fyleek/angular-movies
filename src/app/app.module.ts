import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // TODO : Order import
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/app-movies.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MovieDataService } from './shared/services/movie-data-service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent, MoviesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [MovieDataService]
})
export class AppModule { }
// TODO : Change favion.ico