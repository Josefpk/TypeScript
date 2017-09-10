class Coche{
	public color: string;
	public modelo: string;
	public veloocidad: number = 0;

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
	public getVelocidad(){
		return this.veloocidad;

	}
}

//CREAR OBJETO

var coche = new Coche();
var coche2 = new Coche();
var coche3 = new Coche();

coche.setColor("ROJO");
/*coche2.setColor("AZUL");
coche3.setColor("VERDE"); */

coche.acelerar();
coche.acelerar();
coche.acelerar();

console.log("El color del coche uno es: "+ coche.getColor());
console.log("La velocidad del coche uno es: "+ coche.getVelocidad());

coche.frenar();

console.log("La velocidad del coche uno despues de frenar es: "+ coche.getVelocidad());


/*console.log("El color del coche uno es: "+ coche2.getColor());
console.log("El color del coche uno es: "+ coche3.getColor());*/