import { MovieDetail } from 'src/app/models/movieDetail.model';
import { Movie } from '../models/movie.model';
import { Component, OnInit, Input } from "@angular/core";
import { MovieDataService } from '../shared/services/movie-data-service';

@Component({
  selector: 'app-movies',
  templateUrl: './app-movies.component.html',
  styleUrls: ['./app-movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  constructor(
    private movieDataService: MovieDataService,
    ) {}
    movies!: Movie[]
    movieDetails!: MovieDetail;
    detailsInformation = false;
  ngOnInit(): void {
    this.movieDataService.getMovie().subscribe(response => { // TODO : Instantiate store (Ngrx) to dont call the API each time page is reload
      this.movies = response;
      this.movies.forEach(movie => {
        movie.release_date = this.changeDateFormat(movie.release_date);
      });
    })
  }

  // TODO : Create method to sort each movie with the genre
  public changeDateFormat(date: string) {
    let splitDate = date.split('-');
    date = splitDate[1] + '/' + splitDate[2] +'/' + splitDate[0];
    let newDate = new Date(date);
    return newDate.toLocaleDateString('en-EN', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  public getMoreInformation(id: number){
    this.movieDataService.getDetails(id).subscribe(response => {
      this.movieDetails = response;
      this.detailsInformation = true;
    })
  }
}