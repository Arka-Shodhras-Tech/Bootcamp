const teams={
    name:'teja',
    branch:'cse',
    college:'srkr',
    team:'ast'
}

for(let x in teams){
    console.log(x +":"+ teams[x])
}

for(let [key,val] of  Object.entries(teams)){
    console.log(key +":"+ val)
}

console.log("object keys")

Object.keys(teams).forEach(val => {
    console.log(val + ":" + teams[val])
});

Object.values(teams).forEach(val => {
    console.log(val)
});

let foo=null
let val=undefined
console.log(foo=val??"unknow")