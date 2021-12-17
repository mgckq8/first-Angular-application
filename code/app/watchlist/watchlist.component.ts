import { Component, OnInit } from '@angular/core';
import { WatchlistService } from '../watchlist.service';
import { Movie, movies} from '../movies';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent {
  
  items = this.watchlistService.getItems();

  
  watchTrailer(trailer: string) {
    window.open(trailer);
  }
  
  constructor(
    private watchlistService: WatchlistService,
  ) { }
  
  clearWatchList(): void {
     this.items = this.watchlistService.clearWatchList();
  }
  
  removeMovie(movie: Movie): void {
      this.watchlistService.removeMovie(movie);
  }
  
  

  ngOnInit(): void {
  }

}
