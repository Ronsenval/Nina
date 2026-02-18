"use strict";

let numberOfFilms;
    function start () {
 numberOfFilms = prompt("Сколько фильмов вы уже посмотрели в этом месяце?", "");

while (
    numberOfFilms === null || //нельзя оставлять пустым 
    numberOfFilms.trim() === "" || //нельзя вводить только пробелы
    Number.isNaN(Number(numberOfFilms)) ||//нельзя вводить не число
    +numberOfFilms <0 || //нельзя вводить отрицательное число
    +numberOfFilms > 100 //нельзя вводить слишком большое число
)
 {
numberOfFilms = prompt("Сколько фильмов вы уже посмотрели в этом месяце?", "");
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true
}; 

    function rememberMyFilms() {
      for (let i = 0; i < 2; i++)
    {
    const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
          b = prompt("На сколько вы его оцените (только целое число от 1 до 10)?", "").trim();

    if (
        a !== null && //нельзя оставлять пустым (кнопка отмена)
        b !== null && 
        a !== "" && //нельзя оставлять пустым
        b !== "" &&
        a.length < 50 && //нельзя больше 50 символов в название 
        +b >= 1 && //оценка от 1 до 10
        +b <= 10 &&
        Number.isInteger(+b) //только целое число
      )
    {
        personalMovieDB.movies[a] = +b;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
  }
}
rememberMyFilms();

const message = document.getElementById("message"); // вызывает элемент h2 из HTML

function  detectPersonalLevel() {
 if (personalMovieDB.count < 10) {
    message.textContent = "Просмотрено довольно мало фильмов";
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    message.textContent = "Вы обычный зритель";
    } else if (personalMovieDB.count >= 30) {
    message.textContent = "Вы активный зритель";
    } else {
    message.textContent = "Произошла ошибка";
    }
  }
// detectPersonalLevel();
  
function showMyDB (hidden) {
 if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    let genre;
    do {
      genre = prompt(`Ваш любимый жанр под номером ${i}?`, "");
      if (genre === null) genre = "";      // нельзя отказаться
      genre = genre.trim();                // убираем пробелы по краям
    } while (
      genre === "" ||                       // пустая строка
      genre === "0" ||                      // ноль запрещён
      !/^(?=.*[A-Za-zА-Яа-яЁё])[A-Za-zА-Яа-яЁё0-9 ]+$/.test(genre)// не только цифры
);                    
    
    personalMovieDB.genres[i - 1] = genre;
  }
}

writeYourGenres();

console.log(personalMovieDB);