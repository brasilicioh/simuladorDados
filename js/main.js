import { toggleTheme } from "./core/darkMode.js";
import { clearScreen, criarNovoDado } from "./core/html.js";
import { rolarDados } from "./core/rolarDado.js";

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
    document.getElementById("body").style.display = "none";
    document.querySelector(".configurarSom").style.display = "none";
    document.querySelector(".btnLimparTela").style.display = "none";
    document.getElementById("configuraSom").style.display = "";
});

const voltarSom = document.querySelector(".voltarSom");
voltarSom.addEventListener("click", () => {
    document.getElementById("body").style.display = "";
    document.querySelector(".configurarSom").style.display = "";
    document.querySelector(".btnLimparTela").style.display = "";
    document.getElementById("configuraSom").style.display = "none";
});

const botoesDeSom = document.querySelectorAll(".botoesSom");
botoesDeSom.forEach(element => {
    element.addEventListener("click", () => {
        const nomeSom = element.dataset.som;
        document.getElementById("tocarOSom").innerHTML = `<audio id="audio" src="sons/${nomeSom}" autoplay></audio>`;
        document.querySelectorAll(".definirSom").forEach(i => {
            document.getElementById("tocarOSomDado").innerHTML = `<audio id="audioDado" src="sons/${nomeSom}"></audio>`;
        })
    });
});

document.getElementById("rolagens").addEventListener("click", (element) => {
    const btn = element.target.closest(".rolarDados");
    if (btn) {
        rolarDados(btn.dataset.id);
    }
})