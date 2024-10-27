/**
 * *Se desea desarrollar una calculadora sencilla vía web. Para ello se dispondrá de un formulario a través del cual introducir los números a usar para los cálculos, cuatro botones con las operaciones básicas (suma, resta, multiplicación y división), otro para obtener el resultado y otro para cancelar los datos introducidos hasta ese momento. Una vez se pulse en el botón de obtener el resultado (=), se mostrará el resultado de las operaciones introducidas. Para este ejercicio es obligatoria la separación entre estructura (HTML), apariencia (CSS) y comportamiento (JS), pudiendo hacer uso de objetos definidos por el usuario si así se desea y debiendo hacer uso de la gestión de eventos según los estándares y recomendaciones del W3C.

 * * ¡Ánimo!
 */

function insertar(numero) {
    document.form.expresion.value += numero;
}

function igual() {
    if (document.form.expresion.value) {
        document.form.expresion.value = eval(document.form.expresion.value);
    }
}

function limpiar() {
    document.form.expresion.value = '';
}

function atras() {
    let expresion = document.form.expresion.value;
    document.form.expresion.value = expresion.substring(0, expresion.length - 1);
}

