var Password = /** @class */ (function () {
    function Password(longitud) {
        if (longitud === void 0) { longitud = 8; }
        this.longitud = longitud; // Asignamos la longitud recibida al atributo longitud
        // Generamos una contraseña aleatoria con la longitud especificada
        this.contraseña = this.generarContraseñaAleatoria(longitud);
    }
    Password.prototype.generarContraseñaAleatoria = function (longitud) {
        var caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var contraseñaAleatoria = "";
        // Generamos cada carácter de la contraseña aleatoria
        for (var i = 0; i < longitud; i++) {
            // Obtenemos un índice aleatorio para seleccionar un carácter del conjunto de caracteres
            var indice = Math.floor(Math.random() * caracteres.length);
            contraseñaAleatoria += caracteres.charAt(indice); // Agregamos el carácter a la contraseña
        }
        return contraseñaAleatoria; // Devolvemos la contraseña aleatoria generada
    };
    return Password;
}());
// Ejemplo de uso
var password1 = new Password(); // Longitud por defecto (8)
console.log("Contraseña 1:", password1.contraseña);
var password2 = new Password(12); // Longitud personalizada (12)
console.log("Contraseña 2:", password2.contraseña);
