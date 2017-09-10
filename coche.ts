class Coche{
	public color: string;
	public modelo: string;
	public veloocidad: number;

	public getColor(){
		return this.color;

	}

	public setColor(color: string){
		this.color = color;
	}
}

//CREAR OBJETO

var coche = new Coche();
var coche2 = new Coche();
var coche3 = new Coche();
coche.setColor("ROJO");
coche2.setColor("AZUL");
coche3.setColor("VERDE");

console.log("El color del coche uno es: "+ coche.getColor());
console.log("El color del coche uno es: "+ coche2.getColor());
console.log("El color del coche uno es: "+ coche3.getColor());