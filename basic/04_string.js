
// here we are going to see some feature about string
name='souik'
age=24
console.log("my name is " + name);
//another and best is 
console.log(`my age is ${age}`); 


// we normally use string.. but if we declare as "new string('')", then a lot of thing we can do


let gamename= new String('     battel ground mobile game')

console.log(gamename.toUpperCase());//BATTEL GROUND MOBILE GAME
//console.log(gamename.toLocaleUpperCase());

console.log(gamename.substring(1,4));//(start index, end index)o/p:'att'

console.log(gamename=gamename.trim());// Removes the leading and trailing white space and line terminator characters from a string.

console.log(gamename.replace(' ','-')); //battel-ground mobile game

console.log(gamearry=gamename.split(' '));//[ 'battel', 'ground', 'mobile', 'game' ]

console.log(Array.isArray(gamearry));//true

console.log(gamearry[1]);//ground
//console.log(gamearry);

