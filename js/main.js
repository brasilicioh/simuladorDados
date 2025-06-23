const allArrays = [];
var count = 0;
var somaAllArrays = 0;

document.querySelector('.btnAddDado').addEventListener('click', () => {
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
    <button style="margin: 0.3em" type="button" class="btn btn-secondary rolarDados" data-id="${count}"">Jogar dados</button>
    <div id="div${count}"></div>
    <br>`;

    document.getElementById("legenda").style.display = "";

    count++;
});

document.querySelector('.btnLimparTela').addEventListener('click', () => {
    document.getElementById('rolagens').innerHTML = '';
    document.getElementById('legenda').style.display = 'none';
    count = 0;
    allArrays.length = 0;
    somaAllArrays = 0;
    document.getElementById("somaAllDados").style.display = "none";
});

document.querySelector(".btnTemaEscuro").addEventListener('click', () => {
    const mudarTema = document.body.classList;
    mudarTema.toggle("dark-mode");

    if (mudarTema.contains("dark-mode")) {  
        document.querySelectorAll(".imageSound").forEach(img => {
            img.src = "img/somBranco.png";
        })
    } else {
        document.querySelectorAll(".imageSound").forEach(img => {
            img.src = "img/som.png";
        })
    }
});

document.querySelector(".configurarSom").addEventListener("click", () => {
    document.getElementById("body").style.display = "none";
    document.querySelector(".configurarSom").style.display = "none";
    document.querySelector(".btnLimparTela").style.display = "none";
    document.getElementById("configuraSom").style.display = "";
});
document.querySelector(".voltarSom").addEventListener("click", () => {
    document.getElementById("body").style.display = "";
    document.querySelector(".configurarSom").style.display = "";
    document.querySelector(".btnLimparTela").style.display = "";
    document.getElementById("configuraSom").style.display = "none";
});

document.querySelectorAll(".botoesSom").forEach(item => {
    item.addEventListener("click", () => {
        const nomeSom = item.dataset.som;
        document.getElementById("tocarOSom").innerHTML = `<audio id="audio" src="sons/${nomeSom}" autoplay></audio>`;
        document.querySelectorAll(".definirSom").forEach(i => {
            document.getElementById("tocarOSomDado").innerHTML = `<audio id="audioDado" src="sons/${nomeSom}"></audio>`;
        })
    });
});

document.getElementById("rolagens").addEventListener("click", (item) => {
    rolarDados(item.target.closest(".rolarDados").dataset.id);
})

function rolarDados(id) {
    const numLados = Number(document.getElementById(`numLados${id}`).value);
    const qtdDados = Number(document.getElementById(`qtdDados${id}`).value);
    const modificacaoAll = Number(document.getElementById(`modificacaoTotal${id}`).value);
    const modificacaoInd = Number(document.getElementById(`modificacaoIndividual${id}`).value);

    const numRetirado = Number(document.getElementById(`numRetirado${id}`).value);

    if ((numLados == "" || numLados <= 1) || (qtdDados == "" || qtdDados < 1) || (numLados > 2**100 || qtdDados > 2**100)) {
        document.getElementById(`div${id}`).innerHTML = ``;
        allArrays[id] = 0;
        somaAllArrays = allArrays.reduce((a, b) => a + b, 0);
        document.getElementById("somaAllDados").innerText = `Soma todos dados atuais: ${somaAllArrays}`;
        if (numLados == "" || qtdDados == "") {
            alert("Um dos campos está nulo");
        } else if (numLados <= 1) {
            alert("O número de lados do dado tem que ser maior que 1");
        } else if (qtdDados < 1) {
            alert("A quantidade de rolagens do dado tem que ser pelo menos 1");
        } else {
            alert("Um dos campos tem valor muito alto");
        }
        return;
    }

    const resultados = [];
    for (let i = 0; i < qtdDados; i++) {
        let num = Math.floor(Math.random() * numLados) + 1;
        while (num == numRetirado) {
            num = Math.floor(Math.random() * numLados) + 1;
        }
        resultados.push(num + modificacaoInd);
    }

    const somaArray = resultados.reduce((a, b) => a + b, 0) + modificacaoAll;
    allArrays.splice(Number(id), 1, somaArray);
    somaAllArrays = allArrays.reduce((a, b) => a + b, 0);

    const saida = resultados.map(num => {
        if (num == 1 + modificacaoInd) {
            return `<span style="color: red">${num}</span>`;
        } else if (num == numLados + modificacaoInd) {
            return `<span style="color: green">${num}</span>`;
        } else {
            return num;
        }
    });

    document.getElementById(`div${id}`).innerHTML = `<h5>Resultados: ${saida.join(", ")} <br> Soma: ${somaArray}</h5>`;
    document.getElementById("somaAllDados").style.display = "";
    document.getElementById("somaAllDados").innerText = `Soma todos dados atuais: ${somaAllArrays}`;
    
    const audioSom = document.getElementById("audioDado");
    audioSom.currentTime = 0;
    audioSom.play();
}