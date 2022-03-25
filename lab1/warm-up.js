'use strict'

// const warm_ups='spring,it,cat';
// console.log(warm_ups)

// const warm_up_list = warm_ups.split(',')


// for(let i=0; i<warm_up_list.length; i++)
//     warm_up_list[i] = warm_up_list[i].trim()


// console.log(warm_up_list)
// const acronyms = [];
// for (let  warm_up of warm_up_list){
//     let acro =" ";
//     for (let i=0; i<warm_up.length; i++)  {
//         if (i==0 || i==1 ) {
//             acro = acro + warm_up[i];
//         }
//     }
//     for (let i=0; i<warm_up.length; i++)  {
//             if (i ==warm_up.length-2 || i==warm_up.length-1) {
//                 acro = acro + warm_up[i] ;
//             }
//     }
//     acronyms.push(acro);
// }
// console.log(acronyms)



const words = ["spring" ,"summer", "a","ab", "abc","autumn","winter"];
function resizeString (str) {
    let new_str;
    if (str.length <2)
         new_str =" ";
    else 
        new_str =str.substring(0,2) + str.substring(str.length -2 ,str.length);
}
for  (let i=0 ;i < words.length; i++) {
    let str =resizeString(word[i]) ;
    console.log(str) ;              //Printing the wholr array in one line
}