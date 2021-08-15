// "use strict";

// alert('Hello!')

// const result = confirm('Are you here?');
// console.log(result);

// const answer = prompt("Are you adult?", "");
// console.log(typeof (answer));

// const answers = [];

// answers[0] = prompt('What is your name?')
// answers[1] = prompt('What is your Surname?')
// answers[2] = prompt('What is your age?')

// document.write(answers);

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько оцените его?", ""),
          c = prompt("Один из последних просмотренных фильмов?", ""),
          d = prompt("На сколько оцените его?", "");
          
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
          
