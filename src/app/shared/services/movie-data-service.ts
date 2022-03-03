import { MovieDetail } from 'src/app/models/movieDetail.model';
import { Movie } from './../../models/movie.model';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment"
import { MOVIE_URLS } from '../routes-variables';

@Injectable()
export class MovieDataService{
  private baseUrl = environment.SERVER_BASE_URL;
  public test : any;

  constructor(private _http: HttpClient) {}

  public getMovie(): Observable<any> { // TODO: Check if possible how to change de the <any> to <Movie>
    return this._http.get(this.baseUrl + MOVIE_URLS.MOVIE_DETAIL_URL);
  }

  public getDetails(id: number): Observable<any> { // TODO: Check if possible how to change de the <any> to <MovieDetail>
    return this._http.get(this.baseUrl + MOVIE_URLS.MOVIE_DETAIL_URL + id);
  }
} // TODO: Add method to post data when comment is send