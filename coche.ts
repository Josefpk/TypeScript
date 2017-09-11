interface CocheBase{
	getModelo():string;
	getVelocidad():number;
}

class Coche implements CocheBase{
	public color: string;
	public modelo: string;
	public veloocidad: number;


//CONSTRUCTOR: es un metodo que s elanza cuano se crea un objeto
// inicia las porpiedades de las variables

	constructor(modelo:any = null){
		this.color ="Blanco";
		this.veloocidad = 0;
		if (modelo == null){
			this.modelo = "bmw generico";
		}else{
			this.modelo = modelo;
		}
		
	}

	public getModelo():string{
		return this.modelo;

	}

	public setModelo(modelo: string){
		this.modelo = modelo;
	}


	public getColor(){
		return this.color;

	}

	public setColor(color: string){
		this.color = color;
	}

	public acelerar(){
		this.veloocidad++;
	}

	public frenar(){
		this.veloocidad--;
	}
	public getVelocidad():number{
		return this.veloocidad;

	}
}

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

console.log("El modelo del coche uno es: "+ coche.getModelo());
console.log("El color del coche uno es: "+ coche.getColor());

console.log("La velocidad del coche uno es: "+ coche.getVelocidad());

coche.frenar();

console.log("La velocidad del coche uno despues de frenar es: "+ coche.getVelocidad());


/*console.log("El color del coche uno es: "+ coche2.getColor());
console.log("El color del coche uno es: "+ coche3.getColor());*/


