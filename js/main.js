import { toggleTheme } from "./core/darkMode.js";
import { clearScreen, criarNovoDado } from "./core/html.js";
import { rolarDados } from "./core/rolarDado.js";
import { soundConfig, tocarOSom } from "./core/som.js";

export const state = {
    allArrays: [],
    count: 0,
    somaAllArrays: 0
}

const adicionarDado = document.querySelector('.btnAddDado');
adicionarDado.addEventListener('click', () => {
    criarNovoDado();
});

const limparTela = document.querySelector('.btnLimparTela');
limparTela.addEventListener('click', () => {
    clearScreen();
});

const temaEscuro = document.querySelector(".btnTemaEscuro")
temaEscuro.addEventListener('click', () => {
    toggleTheme();
});

const configSom = document.querySelector(".configurarSom");
configSom.addEventListener("click", () => {
    soundConfig(true);
});

const voltarSom = document.querySelector(".voltarSom");
voltarSom.addEventListener("click", () => {
    soundConfig(false);
});

const botoesDeSom = document.querySelectorAll(".botoesSom");
botoesDeSom.forEach(element => {
    element.addEventListener("click", () => {
        tocarOSom(element);
    });
});

const btnRolagens = document.getElementById("rolagens");
btnRolagens.addEventListener("click", (element) => {
    const btn = element.target.closest(".rolarDados");
    if (btn) {
        rolarDados(btn.dataset.id);
    }
});