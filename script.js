const modal__inicio = document.getElementById("modal__inicio");
const fechado = document.getElementById("botao");
const modal__meia = document.getElementById("modal__meia");
const botao__meia = document.getElementById("botao__meia");
const modal__meia2 = document.getElementById("modal__meia2");
const botao__meia2 = document.getElementById("botao__meia2");
const modal__meia3 = document.getElementById("modal__meia3");
const botao__meia3 = document.getElementById("botao__meia3");
const modal__xicara = document.getElementById("modal__xicara");
const botao__xicara = document.getElementById("botao__xicara");
const xicara = document.getElementById("caneca");
const modal__vela = document.getElementById("modal__vela");
const botao__vela = document.getElementById("botao__vela");
const modal__vela2 = document.getElementById("modal__vela2");
const botao__vela2 = document.getElementById("botao__vela2");
const fogo = document.getElementById("fogo-vela");
const modal__quadro = document.getElementById("modal__quadro");
const botao__quadro = document.getElementById("botao__quadro");
const modal__presente = document.getElementById("modal__presente");
const botao__presente = document.getElementById("botao__presente");
const modal__presente2 = document.getElementById("modal__presente2");
const botao__presente2 = document.getElementById("botao__presente2");
const modal__presente3 = document.getElementById("modal__presente3");
const botao__presente3 = document.getElementById("botao__presente3");
const modal__presente4 = document.getElementById("modal__presente4");
const botao__presente4 = document.getElementById("botao__presente4");
const presenteAberto = document.getElementById("presenteAberto");
const presenteEmbalado2 = document.getElementById("presenteEmbalado2");
const modal__guirlanda = document.getElementById("modal__guirlanda");
const botao__guirlanda = document.getElementById ("botao__guirlanda")
const modal__guirlanda2 = document.getElementById("modal__guirlanda2");
const botao__guirlanda2 = document.getElementById ("botao__guirlanda2")
const guirlandaApagada = document.getElementById("guirlandaApagada");
const guirlanda = document.getElementById("guirlanda");
const chamine = document.getElementById
("chamine");


// FEECHAR MODAL INICIO:
fechado.onclick = () => {
  modal__inicio.style.display = "none";
  modal__meia.style.display = "none";
  modal__meia2.style.display = "none";
  modal__meia3.style.display = "none";
  modal__xicara.style.display = "none";
  modal__vela.style.display = "none";
  modal__vela2.style.display = "none";
  modal__quadro.style.display = "none";
  modal__presente.style.display = "none";
  modal__presente2.style.display = "none";
  modal__presente3.style.display = "none";
  modal__presente4.style.display = "none";
  modal__guirlanda.style.display = "none";
  modal__guirlanda2.style.display = "none";
  chamine.style.pointerEvents = "all";
}

// ABRIR MODAL MEIA
function abrirMeia() {
  modal__meia.style.display = "flex";
  chamine.style.pointerEvents = "none";
}

function abrirMeia2() {
    modal__meia.style.display = "none";
    modal__meia2.style.display = "flex";
    chamine.style.pointerEvents = "none";
}

function abrirMeia3() {
    modal__meia2.style.display = "none";
    modal__meia3.style.display = "flex";
    chamine.style.pointerEvents = "none";
}

  botao__meia3.onclick = () => {
  modal__meia3.style.display = "none";
  chamine.style.pointerEvents = "all";
}

document.getElementById("meia").onclick = () => abrirMeia();
document.getElementById("botao__meia").onclick = () => abrirMeia2();
document.getElementById("botao__meia2").onclick = () => abrirMeia3();


// ABRIR MODAL XICARA:

function abrirXicara() {
  modal__xicara.style.display = "flex";
  chamine.style.pointerEvents = "none";
}

botao__xicara.onclick = () => {
  modal__xicara.style.display = "none";
  chamine.style.pointerEvents = "all";
}

function esconderXicara() {
  const xicara = document.getElementById("caneca");
  if (xicara) {
    xicara.style.display = "none";
    modal__xicara.style.display = "none";
  }
}


document.getElementById("caneca").onclick = () => abrirXicara();
document.getElementById("botao__xicara").onclick = () => esconderXicara();


// ABRIR MODAL VELA:

const modalApagar = document.getElementById("modal__vela");
const botaoApagar = document.getElementById("botao__vela");
const modalAcender = document.getElementById("modal__vela2");
const botaoAcender = document.getElementById("botao__vela2");


let velaAcesa = true;

vela.onclick = () => {
  if (velaAcesa) {
    modalApagar.style.display = "flex";
  } else {
    modalAcender.style.display = "flex";
  }
  chamine.style.pointerEvents = "none";
};


botaoApagar.onclick = () => {
  modalApagar.style.display = "none";
  if(fogo) fogo.setAttribute("display", "none"); 
  velaAcesa = false;
  chamine.style.pointerEvents = "all";
};

botaoAcender.onclick = () => {
  modalAcender.style.display = "none";
  if(fogo) fogo.setAttribute("display", "block"); 
  velaAcesa = true;
  chamine.style.pointerEvents = "all";
};

// ABRIR MODAL PRESENTE:

// function abrirPresente() {
//   modal__presente.style.display = "flex";
//   chamine.style.pointerEvents = "none";
// }

    
// function abrirPresente2() {
//     const presente = document.getElementById("presente");
//   if (presente) {
//     presente.style.display = "none";
//     modal__presente2.style.display = "flex";
//     modal__presente.style.display = "none";
//     chamine.style.pointerEvents = "none";
// }
// }

// function abrirPresente3() {
//     modal__presente2.style.display = "none";
//     modal__presente3.style.display = "flex";
//     chamine.style.pointerEvents = "none";
// }

// function abrirPresente4() {
//     modal__presente3.style.display = "none";
//     modal__presente4.style.display = "flex";
//     chamine.style.pointerEvents = "none";
// }





// document.getElementById("presente").onclick = () => abrirPresente();
// document.getElementById("botao__presente").onclick = () => abrirPresente2();
// document.getElementById("botao__presente2").onclick = () => abrirPresente3();
// document.getElementById("botao__presente3").onclick = () => abrirPresente4();


function abrirPresente() {
  modal__presente.style.display = "flex";
  chamine.style.pointerEvents = "none";
}


function abrirPresente2() {
  const presente = document.getElementById("presente");
  if (presente) {
    presente.style.display = "none";
    modal__presente.style.display = "none";
    modal__presente2.style.display = "flex";
    presenteAberto.style.display = "flex";
  chamine.style.pointerEvents = "all";
  }
}

function abrirPresente3() {
  const presente = document.getElementById("presente");
  if (presente) {
    presente.style.display = "none";
    modal__presente2.style.display = "none";
    modal__presente3.style.display = "flex";
    presenteAberto.style.display = "flex";
  chamine.style.pointerEvents = "all";
  }
}

function fecharPresente() {
  const presente = document.getElementById("presente");
  if (presente) {
    presenteAberto.style.display = "none";
    modal__presente3.style.display = "none";
    modal__presente4.style.display = "flex";
    presenteEmbalado2.style.display = "flex";
  chamine.style.pointerEvents = "all";
  }
}

  botao__presente4.onclick = () => {
  modal__presente4.style.display = "none";
  chamine.style.pointerEvents = "all";
};


document.getElementById("presente").onclick = () => abrirPresente();
document.getElementById("botao__presente").onclick = () => abrirPresente2();
document.getElementById("botao__presente2").onclick = () => abrirPresente3();
document.getElementById("botao__presente3").onclick = () => fecharPresente();



// ABRIR MODAL GUIRLANDA: 

function abrirGuirlanda() {
  modal__guirlanda.style.display = "flex";
  chamine.style.pointerEvents = "none";
}


function apagarGuirlanda() {
  const guirlanda = document.getElementById("guirlanda");
  if (guirlanda) {
    guirlanda.style.display = "none";
    modal__guirlanda.style.display = "none";
    guirlandaApagada.style.display = "flex";
  chamine.style.pointerEvents = "all";
  }
}

function abrirGuirlanda2() {
  modal__guirlanda2.style.display = "flex";
  chamine.style.pointerEvents = "none";
}

function acenderGuirlanda() {
  const guirlanda = document.getElementById("guirlanda");
  if (guirlandaApagada) {
    guirlanda.style.display = "flex";
    modal__guirlanda2.style.display = "none";
    guirlandaApagada.style.display = "none";
  chamine.style.pointerEvents = "all";
  }
}


document.getElementById("guirlanda").onclick = () => abrirGuirlanda();
document.getElementById("botao__guirlanda").onclick = () => apagarGuirlanda();
document.getElementById("guirlandaApagada").onclick = () => abrirGuirlanda2();
document.getElementById("guirlandaApagada").onclick = () => abrirGuirlanda2();
document.getElementById("botao__guirlanda2").onclick = () => acenderGuirlanda();


// ABRIR MODAL QUADRO:

function abrirQuadro() {
  modal__quadro.style.display = "flex";
  chamine.style.pointerEvents = "none";
}

botao__quadro.onclick = () => {
  modal__quadro.style.display = "none";
  chamine.style.pointerEvents = "all";
};

document.getElementById("quadro").onclick = () => abrirQuadro();

