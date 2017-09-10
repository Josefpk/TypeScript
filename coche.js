var Coche = /** @class */ (function () {
    //CONSTRUCTOR: es un metodo que s elanza cuano se crea un objeto
    // inicia las porpiedades de las variables
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.color = "Blanco";
        this.veloocidad = 0;
        if (modelo == null) {
            this.modelo = "bmw generico";
        }
        else {
            this.modelo = modelo;
        }
    }
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.acelerar = function () {
        this.veloocidad++;
    };
    Coche.prototype.frenar = function () {
        this.veloocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.veloocidad;
    };
    return Coche;
}());
//CREAR OBJETO
var coche = new Coche("FERRARI");
var coche2 = new Coche();
var coche3 = new Coche();
coche.setColor("ROJO");
/*coche2.setColor("AZUL");
coche3.setColor("VERDE"); */
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log("El modelo del coche uno es: " + coche.getModelo());
console.log("El color del coche uno es: " + coche.getColor());
console.log("La velocidad del coche uno es: " + coche.getVelocidad());
coche.frenar();
console.log("La velocidad del coche uno despues de frenar es: " + coche.getVelocidad());
/*console.log("El color del coche uno es: "+ coche2.getColor());
console.log("El color del coche uno es: "+ coche3.getColor());*/
