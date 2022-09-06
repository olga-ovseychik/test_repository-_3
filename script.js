'use strict';

//--Task-1--//

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

//--Task-2--//

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//--Task-3--//

const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('На сколько оцените его', ''),
      c = prompt('Один из последних просмотренных фильмов', ''),
      d = prompt('На сколько оцените его', '');


console.log(personalMovieDB);

