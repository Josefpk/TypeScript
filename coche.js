var Coche = /** @class */ (function () {
    function Coche() {
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    return Coche;
}());
//CREAR OBJETO
var coche = new Coche();
var coche2 = new Coche();
var coche3 = new Coche();
coche.setColor("ROJO");
coche2.setColor("AZUL");
coche3.setColor("VERDE");
console.log("El color del coche uno es: " + coche.getColor());
console.log("El color del coche uno es: " + coche2.getColor());
console.log("El color del coche uno es: " + coche3.getColor());
