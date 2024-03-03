// non primitive data type 
// array[], object{}, function(){}
//o/p at side
myname='souvik'
lastname='adak'
age=30
user1={
    email:'souvik@gmail.com',
    age:25

}
user2=user1 /* user2 is refering to same obj box as use1 */

// so if we change in user2, it will reflect to user1

user2.email='adak@gmail.com'
console.log(user1.age)//25
user2.age=55
 console.log(user1.email); //adak@gmail.com
 console.log(myname);//souvik
 console.log(age);//30
 console.log(user2.age)//55
 console.log(user1.age)//55