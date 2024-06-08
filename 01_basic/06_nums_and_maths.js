const score = 400 
// console.log(score); //^ 400

const balance = new Number(100); 

// console.log(balance) //^ [Number:100]

// console.log(balance.toString());  
// console.log(balance) 

// console.log(balance.toFixed(1)) //^ fixed to given decimal number  (starts from decimal place)

const otherNumber = 233.5569 
// console.log(typeof otherNumber.toFixed(3));  //^ returns a string

// console.log(otherNumber.toPrecision(3)) //^ returns a string to a given number of value(starts from most left)

//! +++++++++++++++++++ Maths +++++++++++++++++++++ !// 

// console.log(Math) 
// console.log(typeof Math.abs(-3)) //^ returns positive of a negative number 
// console.log(Math.round(55.88))  //^ round off
// console.log(Math.ceil(5.66))    //^ ceil value
// console.log(Math.floor(5.66))   //^ floor value 
// console.log(Math.min(3,4,5,2))     //^ returns minimum 
// console.log(Math.max(2,34,56))     //^ returns maximum 

// console.log(Math.random()) 
// console.log(Math.floor(Math.random()*10)+1)   
const min = 10 
const max = 20 

console.log(Math.floor(Math.random()*(max-min+1) + min))

