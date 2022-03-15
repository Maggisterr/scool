'use strict';

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?","");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let task1 = prompt("Один из последних просмотренных фильмов",""),
    task2 = prompt("Насколько оцените его?",""),
    task3 = prompt("Один из последних просмотренных фильмов",""),
    task4 = prompt("Насколько оцените его?","");

personalMovieDB.movies [task1] = task2;
personalMovieDB.movies [task3] = task4;

console.log(personalMovieDB);
