import { Comments } from './models/comments.model';
import { MovieDataService } from './shared/services/movie-data-service';
import { Movie } from './models/movie.model';
import { MovieDetail } from './models/movieDetail.model';
import { Gender } from './models/gender.model';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, Subject } from 'rxjs';
import { Genres } from './constants/genres';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  sortMoviesId!: number;
  genres = Genres;
  genreId!: number;
  movies!: Movie[];
  sortMovies!: Movie[];
  movieDetails!: MovieDetail;
  detailsInformation = false;
  disableMenu = false;

  constructor(private observer: BreakpointObserver, private movieDataService: MovieDataService){}

  ngOnInit(): void {
    this.getMovies(false);
  }

  AfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  changeDateFormat(date: string) {
    let splitDate = date.split('-');
    date = splitDate[1] + '/' + splitDate[2] +'/' + splitDate[0];
    let newDate = new Date(date);
    return newDate.toLocaleDateString('en-EN', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  getMoreInformation(id: number){
    this.movieDataService.getDetails(id).subscribe(response => {
      this.movieDetails = response;
      this.detailsInformation = true;
      this.disableMenu = true;
    })
  }

  getMovies(isSorted: boolean) {
    this.movieDataService.getMovie().subscribe((response: Movie[]) => {
      response.forEach(movie => {
        movie.release_date = this.changeDateFormat(movie.release_date);
      });
      if(isSorted){
        this.sortMovies = [];
        response.forEach(movie => {
          (movie.genres as Gender[]).forEach(genre => {
            if(genre.id === this.genreId){
              this.sortMovies.push(movie);
            }
          })
        })
        this.movies = this.sortMovies;
      } else {
        this.movies = response;
      }
    });
  }

  getMoviesByGenre(genreId: number){
    this.genreId = genreId;
    console.log(this.genreId);
    this.getMovies(true);
  }

  sendComment(rating: string, text: string, id: number){
    let numRating = parseInt(rating);
    if ((numRating > 0 || numRating < 10) && text) {
      this.movieDataService.sendComment(rating, text, id).subscribe(response => {
        if(response as Comments){
          this.movieDetails.comments.push(response);
        }
      });
    }
  }
}
