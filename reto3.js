var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(precioBase, color, consumoEnergetico, peso) {
        if (precioBase === void 0) { precioBase = Electrodomestico.PRECIO_BASE_POR_DEFECTO; }
        if (color === void 0) { color = "blanco"; }
        if (consumoEnergetico === void 0) { consumoEnergetico = Electrodomestico.CONSUMO_ENERGETICO_POR_DEFECTO; }
        if (peso === void 0) { peso = Electrodomestico.PESO_POR_DEFECTO; }
        this.precioBase = precioBase;
        this.color = this.validarColor(color);
        this.consumoEnergetico = this.validarConsumoEnergetico(consumoEnergetico);
        this.peso = peso;
    }
    // Métodos get de todos los atributos
    Electrodomestico.prototype.getPrecioBase = function () {
        return this.precioBase;
    };
    Electrodomestico.prototype.getColor = function () {
        return this.color;
    };
    Electrodomestico.prototype.getConsumoEnergetico = function () {
        return this.consumoEnergetico;
    };
    Electrodomestico.prototype.getPeso = function () {
        return this.peso;
    };
    Electrodomestico.prototype.validarColor = function (color) {
        color = color.toLowerCase();
        return Electrodomestico.COLORES_DISPONIBLES.indexOf(color) !== -1 ? color : "blanco";
    };
    Electrodomestico.prototype.validarConsumoEnergetico = function (consumo) {
        return Electrodomestico.CONSUMOS_VALIDOS.indexOf(consumo.toUpperCase()) !== -1 ? consumo.toUpperCase() : "F";
    };
    Electrodomestico.prototype.precioFinal = function () {
        var incrementoPrecio = 0;
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
        }
        else if (this.peso >= 20 && this.peso < 49) {
            incrementoPrecio += 50;
        }
        else if (this.peso >= 50 && this.peso < 79) {
            incrementoPrecio += 80;
        }
        else if (this.peso >= 80) {
            incrementoPrecio += 100;
        }
        return this.precioBase + incrementoPrecio;
    };
    Electrodomestico.COLORES_DISPONIBLES = ["blanco", "negro", "rojo", "azul", "gris"];
    Electrodomestico.CONSUMO_ENERGETICO_POR_DEFECTO = "F";
    Electrodomestico.PRECIO_BASE_POR_DEFECTO = 100;
    Electrodomestico.PESO_POR_DEFECTO = 5;
    Electrodomestico.CONSUMOS_VALIDOS = ["A", "B", "C", "D", "E", "F"];
    return Electrodomestico;
}());
var Lavadora = /** @class */ (function (_super) {
    __extends(Lavadora, _super);
    function Lavadora(precioBase, color, consumoEnergetico, peso, carga) {
        if (precioBase === void 0) { precioBase = Electrodomestico.PRECIO_BASE_POR_DEFECTO; }
        if (color === void 0) { color = "blanco"; }
        if (consumoEnergetico === void 0) { consumoEnergetico = Electrodomestico.CONSUMO_ENERGETICO_POR_DEFECTO; }
        if (peso === void 0) { peso = Electrodomestico.PESO_POR_DEFECTO; }
        if (carga === void 0) { carga = Lavadora.CARGA_POR_DEFECTO; }
        var _this = _super.call(this, precioBase, color, consumoEnergetico, peso) || this;
        _this.carga = carga;
        return _this;
    }
    // Método get de carga
    Lavadora.prototype.getCarga = function () {
        return this.carga;
    };
    Lavadora.prototype.precioFinal = function () {
        // Llamamos al método precioFinal del padre (Electrodomestico) para obtener el precio base
        var precioFinal = _super.prototype.precioFinal.call(this);
        // Si la carga es mayor de 30 kg, aumentamos el precio en 50 €
        if (this.carga > 30) {
            precioFinal += 50;
        }
        return precioFinal;
    };
    Lavadora.CARGA_POR_DEFECTO = 5;
    return Lavadora;
}(Electrodomestico));
var Television = /** @class */ (function (_super) {
    __extends(Television, _super);
    function Television(precioBase, color, consumoEnergetico, peso, resolucion, _4k) {
        if (precioBase === void 0) { precioBase = Electrodomestico.PRECIO_BASE_POR_DEFECTO; }
        if (color === void 0) { color = "blanco"; }
        if (consumoEnergetico === void 0) { consumoEnergetico = Electrodomestico.CONSUMO_ENERGETICO_POR_DEFECTO; }
        if (peso === void 0) { peso = Electrodomestico.PESO_POR_DEFECTO; }
        if (resolucion === void 0) { resolucion = Television.RESOLUCION_POR_DEFECTO; }
        if (_4k === void 0) { _4k = Television._4K_POR_DEFECTO; }
        var _this = _super.call(this, precioBase, color, consumoEnergetico, peso) || this;
        _this.resolucion = resolucion;
        _this._4k = _4k;
        return _this;
    }
    // Método get de resolución
    Television.prototype.getResolucion = function () {
        return this.resolucion;
    };
    // Método get del atributo 4K
    Television.prototype.tiene4K = function () {
        return this._4k;
    };
    Television.prototype.precioFinal = function () {
        // Llamamos al método precioFinal del padre (Electrodomestico) para obtener el precio base
        var precioFinal = _super.prototype.precioFinal.call(this);
        // Si la resolución es mayor de 40 pulgadas, incrementamos el precio en un 30%
        if (this.resolucion > 40) {
            precioFinal *= 1.3;
        }
        // Si tiene 4K incorporado, aumentamos el precio en 50 €
        if (this._4k) {
            precioFinal += 50;
        }
        return precioFinal;
    };
    Television.RESOLUCION_POR_DEFECTO = 20;
    Television._4K_POR_DEFECTO = false;
    return Television;
}(Electrodomestico));
var MainApp = /** @class */ (function () {
    function MainApp() {
    }
    MainApp.main = function () {
        var electrodomesticos = new Array(10);
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
        var totalElectrodomesticos = 0;
        var totalTelevisores = 0;
        var totalLavadoras = 0;
        for (var _i = 0, electrodomesticos_1 = electrodomesticos; _i < electrodomesticos_1.length; _i++) {
            var electrodomestico = electrodomesticos_1[_i];
            var precioFinalElectrodomestico = electrodomestico.precioFinal();
            totalElectrodomesticos += precioFinalElectrodomestico;
            if (electrodomestico instanceof Television) {
                totalTelevisores += precioFinalElectrodomestico;
            }
            else if (electrodomestico instanceof Lavadora) {
                totalLavadoras += precioFinalElectrodomestico;
            }
        }
        console.log("Precio total de Electrodomésticos:", totalElectrodomesticos);
        console.log("Precio total de Televisores:", totalTelevisores);
        console.log("Precio total de Lavadoras:", totalLavadoras);
    };
    return MainApp;
}());
// Ejecutar la función main para mostrar los resultados
MainApp.main();
