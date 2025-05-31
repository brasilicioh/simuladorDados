let count = 0;

function addDado() {
    document.getElementById("rolagens").innerHTML += `<br>  
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Lados do Dado</span>
        </div>
        <input id="numLados${count}" type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
    </div>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Qtd de Dados</span>
        </div>
        <input id="qtdDados${count}" type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
    </div>
    <button type="button" class="btn btn-secondary" id="${count}" onclick="rolarDados(this.id)">Jogar dados</button>
    <div id="div${count}"></div>
    <br>`;

    count += 1;
}

function rolarDados(id) {
    const numLados = Number(document.getElementById(`numLados${id}`).value);
    const qtdDados = Number(document.getElementById(`qtdDados${id}`).value);

    let resultados = [];
    for (let i = 0; i < qtdDados; i++) {
        let num = 1;
        while (num == 1) {
            num = Math.floor(Math.random() * numLados) + 1;
        }
        resultados.push(num);
    }

    let somaArray = resultados.reduce((a, b) => a + b, 0);

    document.getElementById(`div${id}`).innerHTML = `<h5>Resultados: ${resultados.join(", ")} <br> Soma: ${somaArray}</h5>`
}