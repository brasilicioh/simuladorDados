let count = 0;

function addDado() {
    if (count == 0) {
        document.getElementById("rolagens").innerHTML += `<br>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Número a ser retirado</span>
            </div>
            <input id="numRetirado" type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
        </div>`;
    }
    document.getElementById("rolagens").innerHTML += `<br>  
    <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Lados do Dado</span>
        </div>
        <input id="numLados${count}" type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
    </div>
    <div class="input-group mb-1">
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

    const numRetirado = Number(document.getElementById(`numRetirado`).value);

    if ((numLados == "" || numLados <= 1) || (qtdDados == "" || qtdDados < 1) || (numLados > 2**100 || qtdDados > 2**100)) {
        document.getElementById(`div${id}`).innerHTML = `<h5>Resultados: Error <br> Soma: Error</h5>`;
        if (numLados == "" || qtdDados == "") {
            alert("Um dos campos está vazio");
        } else if (numLados <= 1) {
            alert("O número de lados do dado tem que ser maior que 1");
        } else if (qtdDados < 1) {
            alert("A quantidade de rolagens do dado tem que ser pelo menos 1");
        } else {
            alert("Um dos campos tem valor muito alto")
        }
        return;
    }

    let resultados = [];
    for (let i = 0; i < qtdDados; i++) {
        let num = Math.floor(Math.random() * numLados) + 1;
        while (num == numRetirado) {
            num = Math.floor(Math.random() * numLados) + 1;
        }
        resultados.push(num);
    }

    let somaArray = resultados.reduce((a, b) => a + b, 0);

    document.getElementById(`div${id}`).innerHTML = `<h5>Resultados: ${resultados.join(", ")} <br> Soma: ${somaArray}</h5>`;
}
