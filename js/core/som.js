export function tocarOSom(element) {
    const nomeSom = element.dataset.som;
    document.getElementById("tocarOSom").innerHTML = `<audio id="audio" src="sons/${nomeSom}" autoplay></audio>`;
    document.querySelectorAll(".definirSom").forEach(() => {
        document.getElementById("tocarOSomDado").innerHTML = `<audio id="audioDado" src="sons/${nomeSom}"></audio>`;
    });
}

function abrirConfig() {
    document.getElementById("body").style.display = "none";
    document.querySelector(".configurarSom").style.display = "none";
    document.querySelector(".btnLimparTela").style.display = "none";
    document.getElementById("configuraSom").style.display = "";
}

function fecharConfig() {
    document.getElementById("body").style.display = "";
    document.querySelector(".configurarSom").style.display = "";
    document.querySelector(".btnLimparTela").style.display = "";
    document.getElementById("configuraSom").style.display = "none";
}

export function soundConfig(abrir) {
    if (abrir) {
        abrirConfig();
    } else {
        fecharConfig();
    }
}