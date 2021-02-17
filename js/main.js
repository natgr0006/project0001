const numberOfFilms = +prompt("How many films did you see?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("One of last film did you see?", ""),
    b = prompt("What is your rating for this film", ""),
    c = prompt("One of last film did you see?", ""),
    d = prompt("What is your rating for this film", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);