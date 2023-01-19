
const btnBlack = document.querySelector('#mostraBlack');
const btnSmart = document.querySelector('#mostraSmart');
const nav = document.querySelector('nav');
const navMenu = document.querySelector('.nav-menu');


const detalhesBlack = document.querySelector('.planos-detalhes-black');
const detalhesSmart = document.querySelector('.planos-detalhes-smart');


function mostrarMais(plano){
    if(plano === 'black'){
        if(detalhesBlack.classList.contains('off')){
            detalhesBlack.classList.remove('off');
            detalhesBlack.classList.add('on');
            btnBlack.innerText = 'Mostrar menos -';
        } else{
            detalhesBlack.classList.remove('on');
            detalhesBlack.classList.add('off');
            btnBlack.innerText = 'Mostrar mais +'
        }
    } 
    if(plano === 'smart'){
        if(detalhesSmart.classList.contains('off')){
            detalhesSmart.classList.remove('off');
            detalhesSmart.classList.add('on');
            btnSmart.innerText = 'Mostrar menos -'
        }
        else{
            detalhesSmart.classList.remove('on');
            detalhesSmart.classList.add('off');
            btnSmart.innerText = 'Mostrar mais +'
        }
    }
}

function chamaNav(){
    if(nav.style.display === 'none'){
        nav.style.display = 'flex';
    } else{
        nav.style.display =  'none'    
    }
}

