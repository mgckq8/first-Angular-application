import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, movies } from '../movies';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movie: Movie | undefined;
  movies = movies;
  
  addToWatchList(movie: Movie) {
      this.watchlistService.addToWatchList(movie);
  }
  
  searchForGenre(genre: string) : Movie[] {
    var genreArr: Movie[] = [];
    var j = 0;
    for (var i in movies) {
        if (movies[i].genre == genre) {
            genreArr[j] = movies[i];
            j++;
        }
    }
    return genreArr;
  }
  
  showComedy() {
    this.movies = this.searchForGenre("Comedy");
  }
  
  showHorror() {
    this.movies = this.searchForGenre("Horror");
  }
  
  showAction() {
    this.movies = this.searchForGenre("Action");
  }
  
  showRomance() {
    this.movies = this.searchForGenre("Romance");
  }
  
  showAll() {
    this.movies = movies;
  }
  
  constructor(
    private route: ActivatedRoute,
     private watchlistService: WatchlistService
  ) { }
  

  ngOnInit(): void {
  }

}
