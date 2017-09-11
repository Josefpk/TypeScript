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