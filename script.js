'use strict';

//--Task-1--//

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели');

//--Task-2--//

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};