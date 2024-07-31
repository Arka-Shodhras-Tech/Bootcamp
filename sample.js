// DOM element methods 
let elementId = document.getElementById("list");
elementId.innerHTML = "teja"

elementId.requestPointerLock();

const con = document.createElement('names');
con.innerHTML="teja"
document.body.appendChild(con);

let elementclass = document.getElementsByClassName("classname")
elementclass[0].innerHTML = "siva"


let bytag = document.getElementsByTagName("div")
bytag[0].innerHTML = "srkr"

let queryall = document.querySelectorAll(".classname")[0]
queryall.innerHTML = "cse"

// let query = document.querySelector("#list")
// query.innerHTML = localStorage.getItem("name")



function Speak() {
    Speech()
}

const removeName = () => {
    localStorage.removeItem("name")
}

const getLoc = () => {
    Locations()
}

const Canva = () => {
    Canvas()
}