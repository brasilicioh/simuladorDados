let count = 0;

function addDado() {
    document.getElementById("rolagens").innerHTML += `<br>
    <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text question" id="inputGroup-sizing-default">Número a ser removido</span>
        </div>
        <input placeholder="Opcional" id="numRetirado${count}" type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
    </div>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text question">Modificação</span>
        </div>
        <input id="modificacaoTotal${count}" type="number" aria-label="Default" class="form-control" placeholder="Opcional... buff na soma total">
        <input id="modificacaoIndividual${count}" type="number" aria-label="Default" class="form-control" placeholder="Opcional... buff em cada dado">
    </div>
    <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text question" id="inputGroup-sizing-default">Lados do Dado</span>
        </div>
        <input id="numLados${count}" type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
    </div>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <span class="input-group-text question" id="inputGroup-sizing-default">Qtd de Dados</span>
        </div>
        <input id="qtdDados${count}" type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
    </div>
    <button style="margin: 0.3em" type="button" class="btn btn-secondary" id="${count}" onclick="rolarDados(this.id)">Jogar dados</button>
    <div id="div${count}"></div>
    <br>`;

    if (count == 0) {
        document.getElementById("legenda").style.display = "";
    }

    count++;
}