'use strict';
const dayjs=require('dayjs');
const isSameOrAfter =require ('dayjs/plugin/isSameOrAfter')
dayjs.extend(isSameOrAfter);
function  Exam(code ,name ,cfu ,score ,date ){

  this.code =code;
  this.name =name;
  this.cfu=cfu;
  this.score=score;
  this.date =dayjs(date);
}

function  createExam(code,name ,cfu,score,date){
    return{
    code:code,
    name :name,
    cfu:cfu,
    score:score,
    date :dayjs(date),
    
    };
  }

  function ExamList() {
      this.examList= [];
      this.add = (exam) => {
          this.examList.push(exam);
      };

      this.find =(code) => {

        const result=this.examList.filter((exam) =>exam.code ===code);
        
        return result.length ? result[0] :underfined;

        // if (result.length)
        //     return result[0];
        // else 
        //     return undefined;

        //   for (let exam of this.examList){
        //       if (exam.code ===code) {
        //           return exam ;
        //       }
        //   }
        //   return underfined;
      };

    //   this.afterDate = (startDate) => {
    //       const result = new Examlist() ;
    //       const starDay =dayjs(startDate) ;

    //       for  (let exam of  this.examList){
    //           if  (exam.date.isSameOrAfter(startDay) )   // compare startDay with exam.date is ok
    //           result.add(exam);
    //       }
    //       return result;
    //   }

      this.afterDate = (startDate) => {
          const result = new ExamList ();
          const startDay =dayjs(startDate) ;
          result.examList =this.filter ( (exam) = exam.date.isSameOrAfter(startDate));
          return result;
      }

      this.print = () => {
          this.examList.forEach( (exam, i) => {
            // console.log('${i+1}) ${exam.name} - ${exam.score}');
            console.log(i+1,exam.name,exam.score)
          });
      };

      // this.average = () => {
      //     const scores = this.examList.map (exam => exam.score);
      //     console.log(scores)
      //     const sum = scores.reduce( ( partial, current) => partial+current, 0)
      //     console.log(sum)
      //     return this.examList.map (exam => exam.scores).reduce( ( partial, current) => partial+current, 0) /this.examList.length 

      // }
      
       this.average = () =>  {
        this.examList.map (exam => exam.score).
        reduce( ( partial, current) => partial+current, 0) /this.examList.length;
      }

  }
const myexam =new Exam('12abc' ,'whatever course' , 8, 27 , '2022-03-08');
// console.log(myexam) ;

const myotherexam =createExam('12abc' ,'whatever' , 12 , 27 , '2022-04-08');

// console.log(myotherexam) ;

// console.log(dayjs('2000-03-08'));
const allMyExams = new ExamList() ;
allMyExams.add(myexam);
allMyExams.add(myotherexam);
allMyExams.add (new Exam('66zzz','title', 6, 24, '2021-09-01'));

allMyExams.print();

// const examsIn2022 =allMyExams.afterDate('2022-01-01');

console.log(allMyExams.average());
debugger;

