'use strict'

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','')

let personalMovieDB

function moviesDB() {
personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actrors: {},
  genres: [],
  privat: false
  };
}
moviesDB();

// let task1 = prompt ('Один из последних просмотренных фильмов?','');
// let task2 = prompt ('На сколько оцените его?','');
// let task3 = prompt ('Один из последних просмотренных фильмов?','');
// let task4 = prompt ('На сколько оцените его?','');

// personalMovieDB.movies[task1] = task2;
// personalMovieDB.movies[task3] = task4;

// console.log(personalMovieDB);

// function taskFilm() {
// for (let i = 1; i < 3; i++) {
//   let task1 = prompt ('Один из последних просмотренных фильмов?','');
//   let task2 = prompt ('На сколько оцените его?','');
//   if (task1 != null && task1 != "" && task1.length <= 50 && task2 != null && task2 != '') {
// personalMovieDB.movies[task1] = task2;
//   } else {
//     i--
//   }
//   // console.log(personalMovieDB);
//   };
// }
//
// taskFilm();
//
// function answersTaskFilms() {
// let a = personalMovieDB.count;
// if (a <= 10) {
//   console.log('Просмотренно довольно мало фильмов');
// } else if (10 < a && a < 30) {
//   console.log('Вы класический зритель');
// } else  if (a > 30) {
//   console.log('Вы киноман!');
// } else {
//   console.log('Произошла ошибка');
//   };
// }

console.log(personalMovieDB);

function showMyDB() {
  if (personalMovieDB.privat != false) {
    moviesDB();

  };
}
let i = 1;

function writeYuorGenres () {
  for ( i = 1; i < 4; i++) {
  personalMovieDB.genres[i-1] = prompt (`Ваш любимый жанр под номером ${i}`);
  };
}

writeYuorGenres ();
