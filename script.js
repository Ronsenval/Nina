"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start () {
    this.count = prompt("Сколько фильмов вы уже посмотрели в этом месяце?", "");
    while (
    this.count === null || //нельзя оставлять пустым 
    this.count.trim() === "" || //нельзя вводить только пробелы
    Number.isNaN(Number(this.count)) ||//нельзя вводить не число
    +this.count <0 || //нельзя вводить отрицательное число
    +this.count > 100 //нельзя вводить слишком большое число
          )
    {
    this.count = prompt("Сколько фильмов вы уже посмотрели в этом месяце?", "");
    }
    this.count = +this.count;
  },

  rememberMyFilms() {
    for (let i = 0; i < 2; i++)
    {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
          b = prompt("На сколько вы его оцените (только целое число от 1 до 10)?", "");

    if (
        a !== null && //нельзя оставлять пустым (кнопка отмена)
        b !== null && 
        a.trim() !== "" && //нельзя оставлять пустым
        b.trim() !== "" &&
        a.length < 50 && //нельзя больше 50 символов в название 
        +b >= 1 && //оценка от 1 до 10
        +b <= 10 &&
        Number.isInteger(+b)&& //только целое число
        /^(?=.*[A-Za-zА-Яа-яЁё])[A-Za-zА-Яа-яЁё0-9 ]+$/.test(a)
        ) {
        this.movies[a] = +b;
        console.log("done");45
        } else {
        console.log("error");
        i--;
      }
    }
  },
 
  detectPersonalLevel() {
    const message = document.getElementById("message"); // вызывает элемент h2 из HTML
    if (this.count < 10) {
    message.textContent = "Просмотрено довольно мало фильмов";
    } else if (this.count >= 10 && this.count < 30) {
    message.textContent = "Вы обычный зритель";
    } else if (this.count >= 30) {
    message.textContent = "Вы активный зритель";
    } else {
    message.textContent = "Произошла ошибка";
    }
  },

  showMyDB () {
    if (!this.privat) {
    console.log(this);
    } 
  },

  toggleVisibleMyDB() {
    if (this.privat) {
      this.privat = false;
    } else {
      this.privat = true;
    }
  },

  writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    let genre = prompt(`Ваш любимый жанр под номером ${i}`);
   
      if (genre === null || genre == "" ) {    
        console.log ('Вы ввели некорректные данные или не ввели их вообще');
        i--;
      } else {
      this.genres[i - 1] = genre;
      }
    }
      
  personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  }
};

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.showMyDB();

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.writeYourGenres();





