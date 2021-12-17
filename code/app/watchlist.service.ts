import { Injectable } from '@angular/core';
import { Movie } from './movies';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  items: Movie[] = [];
  
  addToWatchList(movie: Movie) {
    var isInArray = false;
    for (var i in this.items) {
        if (movie == this.items[i]) {
            isInArray = true;
        }
    }
    if (!isInArray)  {
      this.items.push(movie); 
    }
   
  }
  // Source for splice: https://www.tutorialspoint.com/typescript/typescript_array_splice.htm
  // Source for indexOf: https://www.tutorialspoint.com/typescript/typescript_array_indexof.htm
  removeMovie(movie: Movie) {
    this.items.splice(this.items.indexOf(movie), 1);
  }
  getItems() {
    return this.items;
  }
  
  clearWatchList() {
    this.items = [];
    return this.items;
  }
  
  constructor() { }
}
