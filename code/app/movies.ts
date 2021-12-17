export interface Movie {
  id: number;
  title: string;
  photo: string; 
  genre: string;
  year: string;
  trailer: string;
}

// This is the source that let me know I need to put the photos in the assets directory
// https://stackoverflow.com/questions/45920722/images-not-loading-in-angular-2

export const movies = [
  {
    id: 1,
    title: 'Shrek',
    photo: '../../assets/photos/shrek.jpg', // img source: https://www.moviepostershop.com/shrek-movie-poster-2001
    genre: 'Comedy',
    year: '2001',
    trailer: 'https://www.youtube.com/watch?v=CwXOrWvPBPk'
  },
  
  {
    id: 2,
    title: 'It',
    photo: '../../assets/photos/it.jpg', // img source: https://stephenking.fandom.com/wiki/IT:_Chapter_One
    genre: 'Horror',
    year: '2017',
    trailer: 'https://www.youtube.com/watch?v=xKJmEC5ieOk'
  },
  
  {
    id: 3,
    title: 'Diary of a Wimpy Kid',
    photo: '../../assets/photos/doawk.jpg', // img source: https://www.pinterest.com/pin/641692646875956810/
    genre: 'Comedy',
    year: '2010',
    trailer: 'https://www.youtube.com/watch?v=7ZVEIgPeDCE'
  },
   {
    id: 4,
    title: 'Avengers: Endgame',
    photo: '../../assets/photos/ae.jpg', // img source: https://movies.disney.com/avengers-endgame
    genre: 'Action',
    year: '2019',
    trailer: 'https://www.youtube.com/watch?v=TcMBFSGVi1c'
  },
  {
    id: 5,
    title: 'Doctor Sleep',
    photo: '../../assets/photos/drsleep.jpg', // img source: https://www.imdb.com/title/tt5606664/
    genre: 'Horror',
    year: '2019',
    trailer: 'https://www.youtube.com/watch?v=BOzFZxB-8cw'
  },
  {
    id: 6,
    title: 'Twilight: Breaking Dawn',
    photo: '../../assets/photos/twilight.jpg', // img source: https://www.imdb.com/title/tt5606664/
    genre: 'Romance',
    year: '2011',
    trailer: 'https://www.youtube.com/watch?v=PQNLfo-SOR4'
  }
  
  
];
