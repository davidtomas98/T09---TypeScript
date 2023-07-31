class Persona {
    private static DEFAULT_SEXO: string = "H"; // Hombre por defecto
  
    nombre: string; // Nombre de la persona
    edad: number; // Edad de la persona
    DNI: string; // DNI de la persona
    sexo: string; // Sexo de la persona (H hombre, M mujer)
    peso: number; // Peso de la persona
    altura: number; // Altura de la persona
  
    constructor(nombre: string, edad: number, DNI: string, sexo: string = Persona.DEFAULT_SEXO, peso: number = 0, altura: number = 0) {
      // Inicialización de los atributos con los valores recibidos en el constructor
      this.nombre = nombre;
      this.edad = edad;
      this.DNI = DNI;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
    }
  }
  
  // Instancia de al menos tres objetos
  const persona1 = new Persona("Juan", 30, "12345678A", "H", 80, 180); // Creación de objeto persona1 con valores específicos
  const persona2 = new Persona("María", 25, "87654321B", "M", 55, 165); // Creación de objeto persona2 con valores específicos
  const persona3 = new Persona("Pedro", 40, "98765432C"); // Creación de objeto persona3 con el sexo por defecto y peso y altura en 0
  
  console.log(persona1); // Mostrar los atributos de persona1 en la consola
  console.log(persona2); // Mostrar los atributos de persona2 en la consola
  console.log(persona3); // Mostrar los atributos de persona3 en la consola
  