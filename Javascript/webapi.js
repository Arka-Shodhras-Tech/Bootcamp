// web speech
const Speech = () => {
    const text = document.getElementById("speech").value
    const utterence = new SpeechSynthesisUtterance(text)
    utterence.pitch = 1;
    utterence.rate = 1;
    utterence.volume = 1;
    window.speechSynthesis.speak(utterence)
}

// web storage
const Store = () => {
    localStorage.setItem("name", "teja")
}

// location
const Locations = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
        document.getElementsByClassName("classname")[0].innerHTML = pos.coords.latitude
        document.getElementsByClassName("classname")[1].innerHTML = pos.coords.longitude
    })
}

// canva

const Canvas = () => {
    const con = document.createElement('canvas');
    con.width = 300;
    con.height = 300;
    document.body.appendChild(con);
    const ctx = con.getContext('3d');
    ctx.fillStyle = 'blue';
    ctx.fillRect(10, 10, 180, 80);
};

const Notifications = () => {
    Notification.requestPermission()
        .then((permisson) => {
            if (permisson === 'granted') {
                new Notification('Hello world!');
            }
        })
        .catch((e) => console.log(e))
    const worker = new Worker('sample.js')
    worker.postMessage("hello world! raa")
}

let query = document.querySelector("#list")
navigator.getBattery()
    .then((battery) => {
        query.innerHTML = battery.level * 100 + "%"
        let query1 = document.createElement('vattery')
        query1.innerHTML = battery.charging ? "yes" : "no"
        query.appendChild(query1)
    })

const Game = () => {
    window.addEventListener("gamepadconnected", (event) => {
        let sample = document.createElement("sample")
        sample.innerHTML = event.gamepad.id
        document.body.appendChild(sample)

    })
}

const Payment = () => {
    const support = [{ supportedMethods: 'basic-card' }]
    const payment = {
        total: {
            label: 'Total', amount: { currency: 'INR', value: '10.00' }
        }
    }
    const paymentpromise = new PaymentRequest(support, payment)
    paymentpromise.show()
        .then(() => {
            PaymentResponse.complete('sucess')
        })
}