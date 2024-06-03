
// console.log("2" > 1); //true
// console.log("02" > 1); //true 


// console.log(null > 0); // false 
// console.log(null == 0); // false 
// console.log(null >= 0); // true 
// console.log(null <= 0 ); //true 

/***********  This happens because ..
in js >= or <= first converts null to number(0)
*/  
/*

console.log(undefined >0); // false 
console.log(undefined >= 0) // false 
//because number conversion of undefined is NaN 

*/

// console.log(Number(undefined)); //NaN
// console.log(Number(null))  // 0  

console.log("2" == 2); 
console.log("2" === 2);