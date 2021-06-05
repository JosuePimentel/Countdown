let timeChoose = prompt('Digite o tempo do countdown Timer:(Em minutos)')
let startingTime = timeChoose ? timeChoose : 1440
let time = startingTime * 60

const d = document.querySelector('#day')
const h = document.querySelector('#hour')
const m = document.querySelector('#min')
const s = document.querySelector('#sec')
2880
setInterval(updateCountdown, 1000)

function updateCountdown() {
    let minutosTotal = time / 60
    let seconds = time % 60
    let minutes = Math.floor((minutosTotal %  60))//Erro a ser tratado
    let hour = Math.floor(minutosTotal / 60)
    let day = Math.floor(minutosTotal / 1440)

    d.innerHTML = day < 10 ? '0' + day : day
    h.innerHTML = hour < 10 ? '0' + hour : hour
    m.innerHTML = minutes < 10 ? '0' + minutes : minutes
    s.innerHTML = seconds < 10 ? '0' + seconds : seconds

    time--
}
