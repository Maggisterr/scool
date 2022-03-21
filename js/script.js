'use strict'

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','')

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actrors: {},
  genres: [],
  privat: false
}



// let task1 = prompt ('Один из последних просмотренных фильмов?','');
// let task2 = prompt ('На сколько оцените его?','');
// let task3 = prompt ('Один из последних просмотренных фильмов?','');
// let task4 = prompt ('На сколько оцените его?','');

// personalMovieDB.movies[task1] = task2;
// personalMovieDB.movies[task3] = task4;

// console.log(personalMovieDB);

for (let i = 1; i < 3; i++) {
  let task1 = prompt ('Один из последних просмотренных фильмов?','');
  let task2 = prompt ('На сколько оцените его?','');
  if (task1 != null && task1 != "" && task1.length <= 50 && task2 != null && task2 != '') {
    personalMovieDB.movies[task1] = task2;
  } else {
    i--
  }
  // console.log(personalMovieDB);
}

let a = personalMovieDB.count;

if (a <= 10) {
  console.log('Просмотренно довольно мало фильмов');
} else if (10 < a && a < 30) {
  console.log('Вы класический зритель');
} else  if (a > 30) {
  console.log('Вы киноман!');
} else {
  console.log('Произошла ошибка');
}

console.log(personalMovieDB);
