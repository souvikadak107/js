// console.log("hello world");


// there are two  ways to declear an obj, one literal and othere is constravtive
//in constractive way we can get "singletone"
// Object.create().. to get "singletone"


//here we are going to study about literal


const user={
    name: "souvik adak",
    age: 25,
    email: "souvik1234@gamil.com",
    chai: true,
    "location":"Chandrkona town"


}

// console.log(user.age);
// console.log(user["location"]);
// console.log(user.location);
// console.log(user.chai);

user.email='james@gamil.com'
// console.log(user);
// {
//     name: 'souvik adak',
//     age: 25,
//     email: 'james@gamil.com',
//     chai: true,
//     location: 'Chandrkona town'
//   }
// Object.freeze(user)// now we cant change values

user.email='adaks@gamil.com'
// console.log(user);// same value as last one

user.greeting=`hello, ${this.name}`
// console.log(user);
// {
//     name: 'souvik adak',
//     age: 25,
//     email: 'adaks@gamil.com',
//     chai: true,
//     location: 'Chandrkona town',
//     greeting: 'hello, souvik adak'
//   }

user.greetingtwo= function(){
    console.log(`welcome to webpage, ${user.name}`);

}

console.log(user.greetingtwo);//[Function (anonymous)]

console.log(user.greetingtwo());//[Function (anonymous)]
// welcome to webpage, souvik adak
// undefined