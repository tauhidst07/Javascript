// const strName = "tauhidset"
const strName = new String("tauhidst"); 
// !...both are same 

// &  String Methods

console.log(strName.length) //^ length of string   

console.log(strName.toUpperCase()); 

console.log(strName.charAt(3)) // ^ gives char at particular index

console.log(strName.indexOf("t")) // ^ gives index of char 
 
const newString = strName.substring(0,5) //^ substring 

// console.log(newString) 

console.log(strName.slice(-9))