
//  primitive ----> 

//  7 types : String , Number, Boolean ,Null, Bigint, undefined , Symbol


// Reference (Non primitive) 

//-->  Array, Objects , Functions   

// ++++++++++++++++++++++++++++++ 

// stack (primitive) , Heap (Non Primitive) 
 
let name = "tauhid" 
 let anothername = name  
 anothername = "ansari" 

 console.log(name) //^ tauhid
 console.log(anothername) //^ ansari 

let userOne = {
    email: "user@google.com", 
    upi:"user@ybl"
} 

let userTwo = userOne 

userTwo.email = "tauhid@gmail.com"; //! it will change email in both objects

console.log(userOne); 
console.log(userTwo) 
 

