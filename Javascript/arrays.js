let names = ['eoc', 'paie', 'sports']

// console.log(names);

// console.log(names[1]);

// spread operator

names[2] = 'ast';

// console.log(names);

// let ages = [18,22,24,25,27]

// console.log(ages[0]);

// let all = ['jhon','thomas','jack',18,22,24]
// console.log(all);

// console.log(names.length);

// Array method
// let method = names.push('kushal');
// let method = names.pop();
// let method = names.join('-');
// let method = names.indexOf('thomas');
// let method = names.concat('raju','jhonny','teja');

let map = names?.map((val) => val === "ast")

let filter = names?.filter((val) => val === "ast")

let find = names?.find((val) => val === "ast")

let includes = names?.includes("ast")

let indexof = names?.indexOf("ast3")

console.log(map);

console.log(filter)

console.log(find)

console.log(includes)

console.log(indexof)


let array = [1, 2, 3, 4, 3, 4, 2, 5, 6]

console.log(array.reverse())

let sum = array.reduce((acc, curr) => (acc + curr), 0)
console.log(sum)

let largest = Math.max(...array)
console.log(largest)

let seclarge = Math.max(...array.filter(val => val !== largest))

console.log(seclarge)

let small = Math.min(...array)
console.log(small)

let secsmall = Math.min(...array.filter(val => val !== small))
console.log(secsmall)

let uniquearray = [...new Set(array)]
console.log(uniquearray)

let unarray = [1, undefined, 3, null, 3, 4, "", 5, 6]
console.log(unarray.filter(Boolean))

console.log(array.filter(e => e !== 4))

console.log(array.sort())

console.log(...array, ...unarray)

const count = [...array, ...unarray].reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc
}, {})

console.log(count)