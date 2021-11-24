let name = prompt("Lütfen Adınızı giriniz")
let hello = document.querySelector("#hello")
let tarihSaat = document.querySelector("#tarih-saat")
let yazı = document.querySelector("#yazı");
let gün = document.querySelector("#gün")

hello.innerHTML = `Merhaba ${name}! Hoşgeldin!`

function saat(){
    var date = new Date().toLocaleString()
    tarihSaat.innerHTML = date;
}

const d = new Date();
const days = ["PAZAR", "PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ"]
gün.innerHTML = days[d.getDay()]

setInterval(saat, 1000);
