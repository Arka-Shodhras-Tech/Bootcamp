// DOM element methods 
let elementId = document.getElementById("list");
elementId.innerHTML = "teja"

let elementclass = document.getElementsByClassName("classname")
elementclass[0].innerHTML = "siva"

let bytag = document.getElementsByTagName("div")
bytag[0].innerHTML = "srkr"

let queryall = document.querySelectorAll(".classname")[0]
// queryall.innerHTML = "cse"
// queryall.textContent="cse"

let query = document.querySelector("#list")
// query.innerHTML = localStorage.getItem("name")
query.textContent="hello darlings.."

const con = document.createElement('names');
con.innerHTML="teja"
document.body.appendChild(con);

queryall.setAttribute('class','newclass')

// query.removeAttribute('id')

console.log(query.getAttribute('id'))

queryall.textContent="cse deprt"

queryall.style.fontSize="50px"

con.style.color="blue"

reminder=document.getElementById("alert")
reminder.addEventListener('click',Alert)
// reminder.removeEventListener('click',Alert)

// add class elements
elementclass[0].classList.add('addclass')
elementclass[0].style.color="red"
document.getElementsByClassName('addclass')[0].textContent="add class";

function Alert() {
    // alert("hello darling..")
    elementclass[0].classList.toggle('addclass')
}

function Speak(){
    Speech()
}

elementId.requestPointerLock();

const removeName = () => {
    localStorage.removeItem("name")
}

const getLoc = () => {
    Locations()
}

const Canva = () => {
    Canvas()
}

