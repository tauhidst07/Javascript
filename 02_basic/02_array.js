
const marvel_heros = ["thor","Ironman","spiderman"] 
const dc_heros = ["spuerman","flash","batman"] 

// const allHeros = marvel_heros.concat(dc_heros);  //^ returns combined array 
//                                                  //^ do not make change in original array
// console.log(allHeros) 
 
// const allHeros = [...marvel_heros,...dc_heros];  //^ Spread operator 
// console.log(allHeros) 

// const temp_arr = [1,2,3,[4,5],[6,7,[8,9]]]; 
// const flated_arr = temp_arr.flat(Infinity)  //^ returns a flated array by combining all nested array elements in a single array
                                               //^ (takes nested depths as an argument)
// console.log(temp_arr); 
// console.log(flated_arr) 

// console.log(Array.isArray("tauhid")); //^ checks if given value is array or not 
// console.log(Array.from("tauhid"))  //^ returns array from given value
// console.log(Array.from({name:"tauhid"})) //! Interesting  

console.log(Array.of(10,20,30,40))

