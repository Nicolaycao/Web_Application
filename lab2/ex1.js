'use strict';
const sqlite =require('sqlite3');

const dayjs=require('dayjs');
const isToday = require('dayjs/plugin/isToday')

dayjs.extend(isToday)
//const isSameOrAfter =require('dayjs'/plugin/isSameOrAfter);

 
function  Film(id ,title ,favorite ,watchdate ,rating ){

    this.id =id;
    this.title =title;
    this.favorite=favorite;
    this.watchdate =dayjs(date);
    this.raitng=rating;
    
  }  

function ExamList(){
    const db =new sqlite.Database(' ./lab2/film.db' ,(err) =>{
        if(err) {
            throw err;
        }
    });
     this.add =(film) => {
        return new Promise(( resolve ,reject) => {
            const sql= ' INSERT INTO film (id, title, favorite , watchdate ,rating) VALUES (?,?,?,?.?)';
            db.run(sql, [film.id,film.title ,film.favorite ,film.watchdate ,film.rating] ,(err)=> {
                if(err) {
                    reject(err);

                }else {
                    resolve(true);
                }
            });
        })
    };
    this.getAll =() => {
        return new Promise((resolve,reject) =>{
            const sql ='SELECT * FROM film' ;
            db.all(sql, (err ,rows) => {
                if (err) {
                    reject(err);

                }else {
                    resolve(rows.map((f) => 
                        new Film (film.id, film.title, film.favorite, film.watchdate, film.rating)
                    ));
                }
            });
        });
    };
    this.getFavorite = async () => {
        const list=  await this.getAll();
        if (list.favorite==ture){
            return list;
        }
    } 
    this.getWatchToday =async (watchdate) => {
        const  list =await this.getAll();
        const  date=dayjs(watchdate)
        if (list.date ==isToday) {
            return list;
        }
    }
    this.getRating =async (rating) => {
        const list =await this.getAll();
        if (list.rating>= rating) {
            return list
        }
    }


    this.gettitle = async (title) => {
        const list = await this.getAll();
        if (list.title.indexOf(title) != -1){
        return list
        }
    }
    this.deleteIdFilm =async (id) => {
        const list = await this.getAll ();
        this.list((film) => {
            this.list.filter ((film) = film.id=! id)

        })
    }
    this.deleteWatchdateFilm = async (date) => {
        const list =await this.getAll ();
        this.list ((film) => {
            this.list.filter ((film) =film.watchdate== date)
        })
    }

    this.getFirst = async () => {
        const list = await this.getAll();
        if (list.length==0) {
            throw new Error ('Empty List!') ;

        }else {
            return list[0];
        }
         // return list[e];
    }
}








async function main() {
    console.log(1);
    const exams =new ExamList ();
    try {
        await exams.add(new Exam ('ZZZZZZ' ,'title',6,24, '2021-09-01'));
    }catch (error) {
        console.log ('Insert was not possible');
   }

   const myexams =await exams.getAll();
   console.log(myexams) ;
   const firstExam =await emxas.getFirst();
   console.log(fistExam.score);
   return 3;
}
main();
console.log(2);