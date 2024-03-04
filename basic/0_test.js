const a=10
let b=20
var c=30
console.log(a,b,c)
b=200
console.log(a,b,c)
 let d;
console.table([a,b,c,d])


// 10 20 30
// 10 200 30
// ┌─────────┬───────────┐
// │ (index) │ Values    │
// ├─────────┼───────────┤
// │ 0       │ 10        │
// │ 1       │ 200       │
// │ 2       │ 30        │
// │ 3       │ undefined │
// └─────────┴───────────┘