const allArrays = [];
var somaAllArrays;

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
            alert("Um dos campos está vazio");
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
    document.getElementById("somaAllDados").innerText = `Soma todos dados atuais: ${somaAllArrays}`;
    
    const audioSom = document.getElementById("audioDado");
    audioSom.currentTime = 0;
    audioSom.play();
}