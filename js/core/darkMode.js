export function toggleTheme() {
    const mudarTema = document.body.classList;
    mudarTema.toggle("dark-mode");

    const imageSound = document.querySelectorAll(".imageSound");
    if (mudarTema.contains("dark-mode")) {  
        imageSound.forEach(img => {
            img.src = "img/somBranco.png";
        })
    } else {
        imageSound.forEach(img => {
            img.src = "img/som.png";
        })
    }
}