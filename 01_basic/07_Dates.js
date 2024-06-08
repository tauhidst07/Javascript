//!+++++++++++++++++++++++++++ Dates ++++++++++++++++++++++++++// 

let myDate = new Date() 
// console.log(myDate) 
// console.log(myDate.toString()) 
// console.log(myDate.toDateString()) //^ returns formatted date string
// console.log(myDate.toLocaleDateString()) //^ return formatted time and date string

// let myCreatedDate = new Date(2024,0,12,5,3,20) //^ year,month,Day,hour,min,sec
// console.log(myCreatedDate);  
 
// const myCreatedDate = new Date("12-01-2024");  //^ month ,date, year
// console.log(myCreatedDate.toLocaleString())  

// const myTimeStamp = Date.now()  
// console.log(myCreatedDate.getTime()) 
 

// console.log(Math.floor(Date.now()/1000)) // ^ converting ms into seconds 

let newDate = new Date(); 
console.log(newDate) 
console.log(newDate.getMonth() + 1 ) //