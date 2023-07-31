var Persona = /** @class */ (function () {
    function Persona(nombre, edad, DNI, sexo, peso, altura) {
        if (sexo === void 0) { sexo = Persona.DEFAULT_SEXO; }
        if (peso === void 0) { peso = 0; }
        if (altura === void 0) { altura = 0; }
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
    }
    Persona.DEFAULT_SEXO = "H"; // Hombre por defecto
    return Persona;
}());
// Instancia de al menos tres objetos
var persona1 = new Persona("Juan", 30, "12345678A", "H", 80, 180);
var persona2 = new Persona("María", 25, "87654321B", "M", 55, 165);
var persona3 = new Persona("Pedro", 40, "98765432C");
console.log(persona1);
console.log(persona2);
console.log(persona3);
