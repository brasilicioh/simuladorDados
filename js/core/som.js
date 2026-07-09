const audios = ["sound1.mp4", "sound2.mp4", "sound3.mp4", "sound4.mp4", "sound5.mp4", "sound6.mp4", "sound7.mp4", "sound8.mp4", "sound9.mp4", "sound10.mp4", "sound11.mp4", "sound12.mp4", "sound13.mp4"]

const randomAudio = () => {
    return audios[Math.floor(Math.random() * audios.length)];
}

export function tocarOSom(element) {
    const isRandom = element.dataset.som === "random";
    const nomeSom = !isRandom ? element.dataset.som : randomAudio();
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