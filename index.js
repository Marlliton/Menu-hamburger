

document.querySelector('.menu').addEventListener('click', botao)

function botao() {
    const span1 = document.querySelector('#span1').classList
    const span2 = document.querySelector('#span2').classList
    const span3 = document.querySelector('#span3').classList
    span1.toggle('transform-before')
    span2.toggle('transform-center')
    span3.toggle('transform-after')
    esconder()
}

function esconder() {
    const nav = document.querySelector('.navegacao').classList
    nav.toggle('esconder')
}
