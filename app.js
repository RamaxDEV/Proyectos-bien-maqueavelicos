const buttons = document.querySelectorAll("button");
const mensajeError = document.getElementById("mensaje-error")
const entrada = document.getElementById("display")
buttons.forEach(btn => {
    btn.addEventListener("click", (event) => {
        if (event.target.id !== "cambiar-color" && event.target.id !== "cambiar-color2") {
            if (btn.id === "=") {
                if (display.value !== "") {
                    display.value = eval(display.value);
                } else {
                    display.value = "Ingresa un numero!";
                }

            } else if (btn.id === "ac") {
                display.value = "";
            } else if (btn.id === "de") {
                display.value = display.value.slice(0, -1);
            } else {
                display.value += btn.textContent;
            }
        }
    });
});

entrada.addEventListener("input", () => {
    const valor = entrada.value.trim();
    if (valor === "0/0") {
        mensajeError.style.display = "block";
    } else {
        mensajeError.style.display = "none"; 
    }
});

const botonCambiarColor = document.getElementById("cambiar-color");

botonCambiarColor.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.style.backgroundColor = "#212D44";
});

const botonCambiarColor2 = document.getElementById("cambiar-color2");

botonCambiarColor2.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.style.backgroundColor = "#87ceeb";
});
