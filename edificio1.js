class Edificio {
    constructor(calle, numero, codigoPostal, plantas) {
        this.calle = calle;
        this.numero = numero;
        this.codigoPostal = codigoPostal;
        this.plantas = [];
        this.puertas = [];
        console.log(`Construido nuevo edificio en calle: ${calle}, nº: ${numero}, CP: ${codigoPostal}.`);
    }

    imprimir() {
        return 'Calle: ' + this.calle + ', Numero: ' + this.numero + ', Codigo Postal: ' + this.codigoPostal;
    }

    modificarTodo(calle, numero, codigoPostal) {
        if (calle) {
            this.calle = calle;
        }
        if (numero) {
            this.numero = numero;
        }
        if (codigoPostal) {
            this.codigoPostal = codigoPostal;
        }
    }

    modificar(calle) {
        this.calle = calle;
    }
    modificar(numero) {
        this.numero = numero;
    }
    modificar(codigoPostal) {
        this.codigoPostal = codigoPostal;
    }


    agregarPlantasYPuertas(numPlantas, puertas) {
        for (let i = 0; i < numPlantas; i++) {
            let planta = [];
            for (let j = 0; j < puertas; j++) {
                planta.push("");
            }
            this.plantas.push(planta);
        }
        console.log(`Agregadas ${numPlantas} plantas con ${puertas} puertas por planta.`);
    }


    agregarPropietario(nombre, planta, puerta) {
        this.plantas[planta - 1][puerta - 1] = nombre;
        console.log(`${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.`);
    }

    imprimirPlantas() {
        console.log(`Listado de propietarios del edificio calle ${this.calle} número ${this.numero}`);
        for (let i = 0; i < this.plantas.length; i++) {
            for (let j = 0; j < this.plantas[i].length; j++) {
                if (this.plantas[i][j] !== "") {
                    console.log(`Propietario del piso ${j + 1} de la planta ${i + 1}: ${this.plantas[i][j]}.`);
                }
            }
        }
    }
}

let A = new Edificio("Garcia Prieto", "58", "15706")
let B = new Edificio("Camino Caneiro", "29", "32004");
let C = new Edificio("San Clemente", "S/N", "15705");
console.log('*************************************************************************************');
console.log(A.imprimir());
console.log(B.imprimir());
console.log(C.imprimir());


A.modificarTodo("Calle Jaume ", "20", "12001");

A.modificar({ calle: "Teniente Monzonis" });
B.modificar({ numero: "19" });
C.modificar({ codigoPostal: "12004" });

console.log(A.imprimir());
console.log(B.imprimir());
console.log(C.imprimir());
console.log('*************************************************************************************')
A.agregarPlantasYPuertas(2, 3);
A.agregarPropietario("Jose Antonio Lopez", 1, 1);
A.agregarPropietario("Luisa Martinez", 1, 2);
A.agregarPropietario("Marta Castellón", 1, 3);
A.agregarPropietario("Antonio Pereira", 2, 2);

A.imprimirPlantas();