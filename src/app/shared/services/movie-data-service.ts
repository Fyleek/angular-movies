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

  public getMovie(): Observable<Movie[]> {
    return this._http.get<Movie[]>(this.baseUrl + MOVIE_URLS.MOVIE_DETAIL_URL);
  }

  public getDetails(id: number): Observable<MovieDetail> {
    return this._http.get<MovieDetail>(this.baseUrl + MOVIE_URLS.MOVIE_DETAIL_URL + id);
  }

  public sendComment(rating: string, text: string, id: number): Observable<any> {
    return this._http.post<any>(this.baseUrl + MOVIE_URLS.MOVIE_DETAIL_URL + id + MOVIE_URLS.MOVIE_COMMENT_URL, {rating : rating, text: text});
  }
}