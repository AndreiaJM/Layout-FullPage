/*Variaveis que guardam elementos é preferivel usar constantes e não var*/

const elementos = document.querySelectorAll('[data-anima]');
const animacaoClass='animacao';

function animaScroll(){
    const topoPaginaJanela=window.pageYOffset+((window.innerHeight*3)/4) /*Topo*/
    elementos.forEach(function(elemento){
        if(topoPaginaJanela > elemento.offsetTop){
            elemento.classList.add(animacaoClass)
        }else{
            elemento.classList.remove(animacaoClass)
        }
    });
}

if(elementos.length){
    window.addEventListener('scroll',function(){
        animaScroll();
    })
}
