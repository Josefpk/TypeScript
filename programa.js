var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Programa = /** @class */ (function () {
    function Programa() {
    }
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    return Programa;
}());
var EditorrVideo = /** @class */ (function (_super) {
    __extends(EditorrVideo, _super);
    function EditorrVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditorrVideo.prototype.getTimeLine = function () {
        return this.timeline;
    };
    EditorrVideo.prototype.setTimeLine = function (timeline) {
        this.timeline = timeline;
    };
    EditorrVideo.prototype.getAllData = function () {
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeLine();
    };
    return EditorrVideo;
}(Programa));
var editor = new EditorrVideo();
editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setTimeLine(4000);
console.log(editor.getAllData());
// LOGICA DEL FORMULARIO
var programas = [];
function guardar() {
    var nombre = document.getElementById("nombre").value.toString();
    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(1);
    programas.push(programa);
    var list = "";
    for (var i = 0; i < programas.length; i++) {
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
    document.getElementById("nombre").value = "";
}
