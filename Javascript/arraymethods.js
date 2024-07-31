const num=[1,2,3,4,5,6,7,8,9]

let test;

// each and every element
test=num.map((val)=>val*2)

console.log(test)

// conditionally passed elements
test=num.filter((val)=>val===2)

console.log(test)