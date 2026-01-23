"use strict";


let numberOFfilms;
do {
 numberOFfilms = prompt("Сколько фильмов вы уже посмотрели в этом месяце?", "");
}

while (
    numberOFfilms === null || //нельзя оставлять пустым 
    numberOFfilms.trim() === "" || //нельзя вводить только пробелы
    !Number.isInteger(+numberOFfilms) || //нельзя вводить не целое число
    +numberOFfilms <0 || //нельзя вводить отрицательное число
    +numberOFfilms > 100 //нельзя вводить слишком большое число
);
numberOFfilms = +numberOFfilms;
const message = document.getElementById("message"); // вызывает элемент h2 из HTML

 if ( numberOFfilms < 10) {
    message.textContent = "Просмотрено довольно мало фильмов";
    } else if (numberOFfilms >= 10 && numberOFfilms < 30) {
    message.textContent = "Вы обычный зритель";
    } else if (numberOFfilms >= 30) {
    message.textContent = "Вы активный зритель";
    } else {
    message.textContent = "Произошла ошибка";
    }

const personalMovieDB = {
  count: numberOFfilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}; 

for (let i = 0; i < 2; i++)
  
  
  {
    const a = prompt("Один из последних просмотренных фильмов?", "");
    const b = prompt("На сколько вы его оцените (только целое число от 1 до 10)?", "");

    if (
        a !== null && //нельзя оставлять пустым (кнопка отмена)
        b !== null && 
        a.trim() !== "" && //нельзя вводить только пробелы
        b.trim() !== "" &&
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
  

// Альтернативный вариант с do while:
// let a;
// do {
//  a = prompt("Один из последних просмотренных фильмов?", "");
//  } while (
//     a === null ||
//     a.trim() === "" ||
//     a.length > 50 //нельзя больше 50 символов
//   );
// let b;
// do {
//  b = prompt("На сколько вы его оцнениете (только целое число от 1 до 10)?", "");
// } while (
//   !Number.isInteger(+b) || 
//   +b < 1 || 
//   +b > 10);
//personalMovieDB.movies[a] = +b;}


console.log(personalMovieDB);