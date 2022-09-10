'use strict';

//--Task-1--//

let numberOfFilms; 

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

    while (numberOfFilms == '' || numberOfFilms == null ||
    isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    }
}

start();

//--Task-2--//

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//--modofied task-3--//



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов', ''),
              b = prompt('На сколько оцените его', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {  
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres.push(genre);
        //personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();
console.log(personalMovieDB);


//-- task-3 (while)--//

// let i = 0;
// while (i < 2) {
//     i++;
//     const a = prompt('Один из последних просмотренных фильмов', ''),
//     b = prompt('На сколько оцените его', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {  
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
// }

//-- task-3 (do-while)--//

// do {
//     i++;
//     const a = prompt('Один из последних просмотренных фильмов', ''),
//     b = prompt('На сколько оцените его', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {  
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
// } while (i < 2);





