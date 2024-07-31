// traditional 
function sum() {
    return 20+30
}

console.log(sum())

// function sum() {
//     return 20+30
// }

// arrow 
const add=()=>{return 20+30}

console.log(add())

function Hello(mesg){
    console.log(mesg + ' '+ this?.name)
}

const per={name:'teja'}

// call method
Hello.call(per,"hello")

// apply method
Hello.apply(per,["hello","Hii"])

// bind method
const bind=Hello.bind(per)

bind("Hii")

bind("how are you")