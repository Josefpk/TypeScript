function holaMundo(nombre) {
    return "Hola mundo!! Soy " + nombre;
}
var nombre = "Jose Banguera";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
// Variables y tipos
var nombre2 = "Jose Banguera";
var edad = 25;
var programador = true;
var langs = ["HTML5", "Javascript", "CSS"];
etiqueta.innerHTML = nombre + " - " + edad;
/*LET: Permite declarar variables limitando su alcanza al bloque o expresion en donde se utiliza

VAR: define una variable local o blobal indeendientemente donde se utilice*/
//DIFERENCIA ENTRE VAR Y LET
var a = 7;
var b = 2;
if (a === 7) {
    var a_1 = 4;
    var b = 1;
    console.log("DENTRO DEL IF: " + a_1 + " - " + b);
}
console.log("FUERA DEL IF: " + a + " - " + b);
// FUNCIONES Y TIPADO DE LAS MISMAS
function devuelveNumero(num) {
    return num;
}
function devuelveString(texto) {
    if (texto == "hola") {
        var num = 30;
    }
    else {
        var num = 100;
    }
    return num;
}
alert(devuelveNumero(25));
alert(devuelveString("hola"));
