function arranque(lanzar: string){
	return function(target: Function){
		target.prototype.lanzamiento = function():void {
			alert(lanzar);
		}
	}
}

@arranque('Lanzamiento de curso')

class Programa{
	public nombre: string;
	public version: number;

	getNombre(){
		return this.nombre;
	}

	setNombre(nombre:string){
		this.nombre = nombre;
	}

	getVersion(){
		return this.version;
	}

	setVersion(version: number){
		this.version = version;
	}
}

var programa = new Programa();
programa.lanzamiento();

class EditorrVideo extends Programa{
	public timeline:number;

	getTimeLine(){
		return this. timeline;
	}
	setTimeLine(timeline:number){
		this.timeline = timeline;
	}

	getAllData():string{
		return this.getNombre()+" - "+this.getVersion()+" - "+this.getTimeLine();
	}
}

var editor = new EditorrVideo();
editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setTimeLine(4000);

console.log(editor.getAllData());


// LOGICA DEL FORMULARIO

var programas = [];

function guardar(){
	var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

	var programa = new Programa();
	programa.setNombre(nombre);
	programa.setVersion(1);

	programas.push(programa);

	var list = "";
	for (var i = 0; i < programas.length; i++) {
		list = list+"<li>"+programas[i].getNombre()+"</li>";
	}

	var listado = <HTMLElement> document.getElementById("listado");
	listado.innerHTML = list;

	(<HTMLInputElement>document.getElementById("nombre")).value = "";

} 

