'use  strict ' ;

const  all_courses ='Web Applications I, Computer Architectures, Data Science and Database Technology, Computer network technologies and services, Information systems security, Software engineering, System and device programming';

console.log(all_courses)

const course_list = all_courses.split(',')


for(let i=0; i<course_list.length; i++)
    course_list[i] = course_list[i].trim()


console.log(course_list)

const acronyms = [];
for (let  course of course_list){
    let acro =" ";
    for (let i=0; i<course.length; i++)  {
        if (i==0 || course[i-1]===' ') {
            acro = acro + course[i].toUpperCase() ;
        }
    }
    acronyms.push(acro);
}
acronyms.sort()

console.log(acronyms)



