class Electrodomestico {
    private static readonly COLORES_DISPONIBLES: string[] = ["blanco", "negro", "rojo", "azul", "gris"];
    protected static readonly CONSUMO_ENERGETICO_POR_DEFECTO: string = "F";
    protected static readonly PRECIO_BASE_POR_DEFECTO: number = 100;
    protected static readonly PESO_POR_DEFECTO: number = 5;
    private static readonly CONSUMOS_VALIDOS: string[] = ["A", "B", "C", "D", "E", "F"];
    precioBase: number;
    color: string;
    consumoEnergetico: string;
    peso: number;
  
    constructor(precioBase: number = Electrodomestico.PRECIO_BASE_POR_DEFECTO, color: string = "blanco", consumoEnergetico: string = Electrodomestico.CONSUMO_ENERGETICO_POR_DEFECTO, peso: number = Electrodomestico.PESO_POR_DEFECTO) {
      this.precioBase = precioBase;
      this.color = this.validarColor(color);
      this.consumoEnergetico = this.validarConsumoEnergetico(consumoEnergetico);
      this.peso = peso;
    }
  
    // Métodos get de todos los atributos
    getPrecioBase(): number {
      return this.precioBase;
    }
  
    getColor(): string {
      return this.color;
    }
  
    getConsumoEnergetico(): string {
      return this.consumoEnergetico;
    }
  
    getPeso(): number {
      return this.peso;
    }
    
    private validarColor(color: string): string {
        color = color.toLowerCase();
        return Electrodomestico.COLORES_DISPONIBLES.indexOf(color) !== -1 ? color : "blanco";
    }
    
    private validarConsumoEnergetico(consumo: string): string {
        return Electrodomestico.CONSUMOS_VALIDOS.indexOf(consumo.toUpperCase()) !== -1 ? consumo.toUpperCase() : "F";
    }
    
  
    precioFinal(): number {
      let incrementoPrecio = 0;
  
      // Incremento del precio según el consumo energético
      switch (this.consumoEnergetico) {
        case "A":
          incrementoPrecio += 100;
          break;
        case "B":
          incrementoPrecio += 80;
          break;
        case "C":
          incrementoPrecio += 60;
          break;
        case "D":
          incrementoPrecio += 50;
          break;
        case "E":
          incrementoPrecio += 30;
          break;
        case "F":
          incrementoPrecio += 10;
          break;
      }
  
      // Incremento del precio según el peso
      if (this.peso >= 0 && this.peso < 19) {
        incrementoPrecio += 10;
      } else if (this.peso >= 20 && this.peso < 49) {
        incrementoPrecio += 50;
      } else if (this.peso >= 50 && this.peso < 79) {
        incrementoPrecio += 80;
      } else if (this.peso >= 80) {
        incrementoPrecio += 100;
      }
  
      return this.precioBase + incrementoPrecio;
    }
  }
  
  class Lavadora extends Electrodomestico {
    private static readonly CARGA_POR_DEFECTO: number = 5;
  
    carga: number;
  
    constructor(precioBase: number = Electrodomestico.PRECIO_BASE_POR_DEFECTO, color: string = "blanco", consumoEnergetico: string = Electrodomestico.CONSUMO_ENERGETICO_POR_DEFECTO, peso: number = Electrodomestico.PESO_POR_DEFECTO, carga: number = Lavadora.CARGA_POR_DEFECTO) {
      super(precioBase, color, consumoEnergetico, peso);
      this.carga = carga;
    }
  
    // Método get de carga
    getCarga(): number {
      return this.carga;
    }
  
    precioFinal(): number {
      // Llamamos al método precioFinal del padre (Electrodomestico) para obtener el precio base
      let precioFinal = super.precioFinal();
  
      // Si la carga es mayor de 30 kg, aumentamos el precio en 50 €
      if (this.carga > 30) {
        precioFinal += 50;
      }
  
      return precioFinal;
    }
  }
  
  class Television extends Electrodomestico {
    private static readonly RESOLUCION_POR_DEFECTO: number = 20;
    private static readonly _4K_POR_DEFECTO: boolean = false;
  
    resolucion: number;
    _4k: boolean;
  
    constructor(precioBase: number = Electrodomestico.PRECIO_BASE_POR_DEFECTO, color: string = "blanco", consumoEnergetico: string = Electrodomestico.CONSUMO_ENERGETICO_POR_DEFECTO, peso: number = Electrodomestico.PESO_POR_DEFECTO, resolucion: number = Television.RESOLUCION_POR_DEFECTO, _4k: boolean = Television._4K_POR_DEFECTO) {
      super(precioBase, color, consumoEnergetico, peso);
      this.resolucion = resolucion;
      this._4k = _4k;
    }
  
    // Método get de resolución
    getResolucion(): number {
      return this.resolucion;
    }
  
    // Método get del atributo 4K
    tiene4K(): boolean {
      return this._4k;
    }
  
    precioFinal(): number {
      // Llamamos al método precioFinal del padre (Electrodomestico) para obtener el precio base
      let precioFinal = super.precioFinal();
  
      // Si la resolución es mayor de 40 pulgadas, incrementamos el precio en un 30%
      if (this.resolucion > 40) {
        precioFinal *= 1.3;
      }
  
      // Si tiene 4K incorporado, aumentamos el precio en 50 €
      if (this._4k) {
        precioFinal += 50;
      }
  
      return precioFinal;
    }
  }
  
  class MainApp {
    public static main(): void {
      const electrodomesticos: Electrodomestico[] = new Array(10);
  
      // Asignar objetos de las clases Televisión y Lavadora a cada posición del array
      electrodomesticos[0] = new Lavadora(300, "gris", "A", 35, 7);
      electrodomesticos[1] = new Television(500, "negro", "A", 35, 50, true);
      electrodomesticos[2] = new Lavadora(250, "azul", "B", 25);
      electrodomesticos[3] = new Television(300, "gris", "B", 32, 25, false);
      electrodomesticos[4] = new Lavadora(400, "blanco", "C", 40, 10);
      electrodomesticos[5] = new Television(700, "rojo", "C", 45, 60, true);
      electrodomesticos[6] = new Lavadora(350, "negro", "D", 30, 5);
      electrodomesticos[7] = new Television(800, "blanco", "D", 55, 70, true);
      electrodomesticos[8] = new Lavadora(500, "gris", "E", 50, 15);
      electrodomesticos[9] = new Television(900, "azul", "E", 65, 80, true);
  
      // Calcular y mostrar el precio final de cada electrodoméstico
      let totalElectrodomesticos = 0;
      let totalTelevisores = 0;
      let totalLavadoras = 0;
  
      for (const electrodomestico of electrodomesticos) {
        const precioFinalElectrodomestico = electrodomestico.precioFinal();
        totalElectrodomesticos += precioFinalElectrodomestico;
  
        if (electrodomestico instanceof Television) {
          totalTelevisores += precioFinalElectrodomestico;
        } else if (electrodomestico instanceof Lavadora) {
          totalLavadoras += precioFinalElectrodomestico;
        }
      }
  
      console.log("Precio total de Electrodomésticos:", totalElectrodomesticos);
      console.log("Precio total de Televisores:", totalTelevisores);
      console.log("Precio total de Lavadoras:", totalLavadoras);
    }
  }
  
  // Ejecutar la función main para mostrar los resultados
  MainApp.main();
  