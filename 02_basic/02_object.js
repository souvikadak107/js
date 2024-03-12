// where we are going to study about "obj using constractor"
// means singleton

const user= new Object();

user.id='1234sou'
user.emai='user@gamil.com'
user.loggedIn=true

// console.log(user);

const obj1={1:"sou", 2:'adak'}
const obj2={3:"sou", 4:'adak'}

const obj3= Object.assign({}, obj1, obj2)
console.log(obj3);

const obj4={...obj1, ...obj2}
console.log(obj4);

const arr= Object.keys(user)// object to array
console.log(arr);
// to get values in a array,,, replace object.key() with object.values()
