const prevButton = document.getElementById('anterior');
const nextButton = document.getElementById('proximo');
const items = document.querySelectorAll('.item');
const pontos = document.querySelectorAll('.ponto');
const numeroIndicador = document.querySelector('.numeros');
const lista = document.querySelector('.lista');

let active = 0
const total = items.length
let timer;

function update(direcao) {
    document.querySelector('.item.ativo').classList.remove('ativo');
    document.querySelector('.ponto.ativo').classList.remove('ativo');

    if (direcao > 0) {
        active += 1

        if (active === total) {
            active = 0
        }
    }

    else if (direcao < 0) {
        active -= 1
        if (active < 0) {
            active = total - 1
        }
    }

    items[active].classList.add('ativo')
    pontos[active].classList.add('ativo')

    numeroIndicador.textContent = String(active + 1).padStart(2, '0')
}

clearInterval(timer)
timer = setInterval(() => {
    update(1)
}, 7000);

prevButton.addEventListener('click', () => {
    update(-1)
})

nextButton.addEventListener('click', () => {
    update(1)

})

