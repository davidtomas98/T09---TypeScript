# Retos de TypeScript - Clases Persona, Password y Electrodomésticos

Este repositorio contiene tres retos de TypeScript que implementan diferentes clases: Persona, Password y Electrodomésticos.

## RETO 1 - Clase Persona

La clase Persona representa a una persona y tiene los siguientes atributos:

- `nombre`: Cadena (por defecto cadena vacía).
- `edad`: Número (por defecto 0).
- `DNI`: Cadena (obligatorio, no tiene valor por defecto).
- `sexo`: Cadena (por defecto "H" para hombre). (Usa una constante para definir el valor por defecto).
- `peso`: Número (por defecto 0).
- `altura`: Número (por defecto 0).

Además, tiene el siguiente constructor:

- `constructor(nombre: string, edad: number, DNI: string, sexo: string = Persona.DEFAULT_SEXO, peso: number = 0, altura: number = 0)`: Crea un objeto Persona con los atributos proporcionados.

## RETO 2 - Clase Password

La clase Password representa una contraseña y tiene los siguientes atributos:

- `longitud`: Número (por defecto 8).
- `contraseña`: Cadena (por defecto cadena vacía).

Además, tiene los siguientes métodos:

- `constructor(longitud: number = 8)`: Crea un objeto Password con la longitud especificada y genera una contraseña aleatoria con esa longitud.
- `generarContraseñaAleatoria()`: Genera una contraseña aleatoria basada en la longitud.

## RETO 3 - Clase Electrodomestico

La clase Electrodomestico es la clase base para otras clases de electrodomésticos y tiene los siguientes atributos:

- `precioBase`: Número (por defecto 100).
- `color`: Cadena (por defecto "blanco").
- `consumoEnergetico`: Cadena (por defecto "F").
- `peso`: Número (por defecto 5).

Además, tiene los siguientes métodos:

- `getPrecioBase()`: Obtiene el precio base del electrodoméstico.
- `getColor()`: Obtiene el color del electrodoméstico.
- `getConsumoEnergetico()`: Obtiene el consumo energético del electrodoméstico.
- `getPeso()`: Obtiene el peso del electrodoméstico.
- `precioFinal()`: Calcula el precio final del electrodoméstico, teniendo en cuenta el consumo energético y el peso.

### Clase Lavadora

La clase Lavadora hereda de Electrodomestico y representa una lavadora. Además de los atributos heredados, tiene el siguiente atributo propio:

- `carga`: Número (por defecto 5).

Además, tiene los siguientes métodos:

- `getCarga()`: Obtiene la capacidad de carga de la lavadora.
- `precioFinal()`: Calcula el precio final de la lavadora, teniendo en cuenta el precio base y la carga.

### Clase Televisión

La clase Televisión hereda de Electrodomestico y representa una televisión. Además de los atributos heredados, tiene los siguientes atributos propios:

- `resolucion`: Número (por defecto 20).
- `_4k`: Booleano (por defecto false).

Además, tiene los siguientes métodos propios:

- `getResolucion()`: Obtiene la resolución de la televisión en pulgadas.
- `tiene4K()`: Verifica si la televisión tiene resolución 4K.
- `precioFinal()`: Calcula el precio final de la televisión, teniendo en cuenta el precio base, la resolución y si tiene 4K.

## Uso

Para utilizar estas clases, puedes seguir los siguientes pasos:

1. Clona este repositorio o descarga los archivos.
2. Asegúrate de tener TypeScript instalado en tu entorno de desarrollo.
3. Abre una terminal en la carpeta donde se encuentran los archivos TypeScript.
4. Compila los archivos TypeScript usando el comando `tsc`.
5. Ejecuta los archivos compilados con el comando `node nombre_archivo.js`.
