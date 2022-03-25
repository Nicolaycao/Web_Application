'use strict';
const dayjs=require('dayjs');
// const isSameOrAfter =require ('dayjs/plugin/isSameOrAfter')
// const Film_list= 'Id: 1, Title: Pulp Fiction, Favorite: true, date: March 10, 2022, Score: 5','Id: 2, Title: 21 Grams, Favorite: true, date: March 17, 2022, Score: 4','Id: 3, Title: Star Wars, Favorite: false, Watch date: <not defined>, Score: <not assigned> ','Id: 4, Title: Matrix, Favorite: false, Watch date: <not defined>, Score: <not assigned>',' Id: 5, Title: Shrek, Favorite: false, Watch date: March 21, 2022, Score: 3';

function  Film( id, title, favorites, watch_date, rating){

  this.id =id;
  this.title =title;
  this.favorites=favorites
  this.date =dayjs(date);
  this.rating=rating;
}


function FilmLibrary(film) {
    this.filmLibrary =[];
    this.addNewFilm = (film) => {
        this.filmLibrary.push(film);
    }
    this.print = () => {
        this.filmLibrary.forEach( (film) => {
          console.log(film);
        });
    };
    // this.sortByDate = (a,b) => {
    //     sort( (a,b) => a.date-b.date);
        
    //     return result;
    // }
    this.sortByDate = (a,b) => {
      
        return (a.date-b.date).reverse();
        }
    this.deleteFilm = (id) => {
        this.filmLibrary((film) => { 
            this.filmLibrary.filter((film) => film.id==! id )
        })
    }
    this.resetWatchedFilms = () => {
        this.filmLibrary((film) => {
            this.filmLibrary.splice(0);

        })
    }
    this.getRated =(film) => {
        
        this.filmLibrary ((rating) => {
            this.filmLibrary.compare((x,y) => {
                    if(x<y){
                        return 1;
                    }
                    else if(x>y){
                        return -1;
                    } else {
                        return 0;
                    }
                    //return  0=(x<y) ? 1:0;


            })
        })
        this.print;
    }


}

const allMyFilms = new FilmLibrary() ;

const myfilm01 =new Film(1 ,'Pulp Fiction' , true , '2022-03-10' ,5);
const myfilm02 =new Film(2, '21 Grams' ,  true,'2022-03-17', 4);
const myfilm03 =new Film(3, 'Star Wars' , false,' not defined', "not defined ");
const myfilm04 =new Film(4, 'Matrix' , false,'not defined', 'not defined');
const myfilm05 =new Film(5, ' Shrek' ,  false,'2022-03-21', 3);
allMyFilms.addNewFilm(myfilm01);
allMyFilms.addNewFilm(myfilm02);
allMyFilms.addNewFilm(myfilm03);
allMyFilms.addNewFilm(myfilm04);
allMyFilms.addNewFilm(myfilm05);
allMyFilms.sortByDate();
allMyFilms.print();

