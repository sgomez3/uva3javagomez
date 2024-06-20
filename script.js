
// Variables con datos personales
let nombre = "Sofia Gomez";
let lugarNacimiento = "Castelar, Provincia de Buenos Aires, Argentina";
let fechaNacimiento = "10-02-1995";

// Mensaje de bienvenida
window.onload = function() {
    let mensaje = `¡Bienvenid@, ${nombre}! Naciste en ${lugarNacimiento} el día ${fechaNacimiento}.`;
    document.getElementById("welcome-message").textContent = mensaje;
};
//Ahora debo colocar los fomularios para que el usuario complete

window.onload = function() {
    document.getElementById("user-form").onsubmit = function(event) {
        event.preventDefault();

        let nombre = document.getElementById("name").value;
        let lugarNacimiento = document.getElementById("birthplace").value;
        let fechaNacimiento = document.getElementById("birthdate").value;

        let mensaje = `¡Bienvenido, ${nombre}! Naciste en ${lugarNacimiento} el ${fechaNacimiento}.`;
        document.getElementById("welcome-message").textContent = mensaje;
        let hoy = new Date();
        let nacimiento = new Date(fechaNacimiento);
        let tiempoVivido = hoy - nacimiento;
        let diasVividos = Math.floor(tiempoVivido / (1000 * 60 * 60 * 24));

        let mensajeDiasVividos = `Has vivido aproximadamente ${diasVividos} días.`;
        document.getElementById("days-lived").textContent = mensajeDiasVividos;
    };
};

