class Password {
    longitud: number; // La longitud de la contraseña
    contraseña: string; // La contraseña generada
  
    constructor(longitud: number = 8) {
      this.longitud = longitud; // Asignamos la longitud recibida al atributo longitud
  
      // Generamos una contraseña aleatoria con la longitud especificada
      this.contraseña = this.generarContraseñaAleatoria(longitud);
    }
  
    private generarContraseñaAleatoria(longitud: number): string {
      const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let contraseñaAleatoria = "";
  
      // Generamos cada carácter de la contraseña aleatoria
      for (let i = 0; i < longitud; i++) {
        // Obtenemos un índice aleatorio para seleccionar un carácter del conjunto de caracteres
        const indice = Math.floor(Math.random() * caracteres.length);
        contraseñaAleatoria += caracteres.charAt(indice); // Agregamos el carácter a la contraseña
      }
  
      return contraseñaAleatoria; // Devolvemos la contraseña aleatoria generada
    }
  }
  
  // Ejemplo de uso
  const password1 = new Password(); // Longitud por defecto (8)
  console.log("Contraseña 1:", password1.contraseña);
  
  const password2 = new Password(12); // Longitud personalizada (12)
  console.log("Contraseña 2:", password2.contraseña);
  