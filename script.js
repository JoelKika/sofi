const btnNo = document.querySelector("#btn-random");
const btnContainer = document.querySelector(".btn");

// Al inicio, el botón NO estará fijo junto a SÍ
btnNo.style.position = "static"; 

// Después de que el usuario pase el mouse sobre NO, empezará a moverse
btnNo.addEventListener("mouseenter", function (e) {
    btnNo.style.position = "absolute"; // Cambia a posición absoluta cuando el usuario interactúa
    moverAleatoriamente(e.target);
});

function moverAleatoriamente(btn) {
    btn.style.fontWeight = "bolder";
    btn.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    btn.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}
