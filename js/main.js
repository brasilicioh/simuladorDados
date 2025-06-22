document.querySelector('.btnLimparTela').addEventListener('click', () => {
    document.getElementById('rolagens').innerHTML = '';
    document.getElementById('legenda').style.display = 'none';
    count = 0;
    allArrays.length = 0;
    somaAllArrays = 0;
    document.getElementById("somaAllDados").style.display = "none";
})

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
})