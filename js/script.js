const relogio = document.querySelector(".relogio");

function mostrarHoraAtual() {
    const data = new Date();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundo = data.getSeconds();
    relogio.innerHTML = hora + ":" + minuto + ":" + segundo;
}

mostrarHoraAtual();
console.log(mostrarHoraAtual())

setInterval(() => {
    mostrarHoraAtual();
},1000)