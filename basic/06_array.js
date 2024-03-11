const arr=[5,6,7,9,1]
// console.log(arr);


const myArr= new Array(1,2,4,3,6)

console.log(myArr.unshift(9));// add ele at beginning and return new length of new array...[ 9, 1, 2, 4, 3, 6 ]

// console.log(myArr);//


const newArr = myArr.join()// array to string

// console.log(myArr);
console.log( typeof(newArr));//string

console.log(newArr);//9,1,2,4,3,6

console.log("a ,,"+myArr)//a ,,9,1,2,4,3,6

const myn1= myArr.slice(2,3)

console.log(myn1);
