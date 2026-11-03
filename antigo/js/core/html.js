import { state } from "../main.js"

function exportarHtmlDado() {
    return `<br>
    <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text question" id="inputGroup-sizing-default">Número a ser removido</span>
        </div>
        <input placeholder="Opcional" id="numRetirado${state.count}" type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
    </div>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text question">Modificação</span>
        </div>
        <input id="modificacaoTotal${state.count}" type="number" aria-label="Default" class="form-control" placeholder="Opcional... buff na soma total">
        <input id="modificacaoIndividual${state.count}" type="number" aria-label="Default" class="form-control" placeholder="Opcional... buff em cada dado">
    </div>
    <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text question" id="inputGroup-sizing-default">Lados do Dado</span>
        </div>
        <input id="numLados${state.count}" type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
    </div>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <span class="input-group-text question" id="inputGroup-sizing-default">Qtd de Dados</span>
        </div>
        <input id="qtdDados${state.count}" type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
    </div>
    <button style="margin: 0.3em" type="button" class="btn btn-secondary rolarDados" data-id="${state.count}"">Jogar dados</button>
    <div id="div${state.count}"></div>
    <br>`;
}

export function criarNovoDado() {
    document.getElementById("rolagens").innerHTML += exportarHtmlDado();
    document.getElementById("legenda").style.display = "";
    state.count++;
}

export function clearScreen() {
    document.getElementById('rolagens').innerHTML = '';
    document.getElementById('legenda').style.display = 'none';
    state.count = 0;
    state.allArrays.length = 0;
    state.somaAllArrays = 0;
    document.getElementById("somaAllDados").style.display = "none";
}