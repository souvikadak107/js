// const score= 400

// console.log(score);

// const balance= new Number(100.23);

// console.log(ch=balance.toString());//100.23
// console.log(typeof(ch)); //string

// console.log(balance.toPrecision(4));// 100.2

// const hundrad= 10000000
// console.log(hundrad.toLocaleString());//10,000,000
// console.log(hundrad.toLocaleString('en-IN'));//1,00,00,000

/*********************************    MATH   **********************************/

console.log(Math);
console.log(Math.abs(-7));
console.log(Math.min(5,1,3,7,));

console.log(Math.max(5,1,3,7,8));

//now let talk about one of most useful keyword... random

console.log(Math.random());// return value btw 0 and 1

// to make it btw 0-9.. jst multiple with 10
// to make it btw 1-10.. jst multiple with 10 and add 1

console.log(Math.floor((Math.random())*10));//0-9

console.log(Math.floor((Math.random())*10)+1);//1-10

// if you want to find somthing in range, cheak out this formula
 min=10
 max=20
 
console.log(Math.floor(Math.random()*(max-min+1))+ min);// now range 10-20


