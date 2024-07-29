let names = ['eoc','paie','sports']

// console.log(names);

// console.log(names[1]);

names[2]= 'ast';

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

let map=names?.map((val)=>val==="ast")

let filter=names?.filter((val)=>val==="ast")

let find=names?.find((val)=>val==="ast")

let includes=names?.includes("ast")

let indexof=names?.indexOf("ast3")

console.log(map);

console.log(filter)

console.log(find)

console.log(includes)

console.log(indexof)