/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function sumar(numero = 0, numero2 = 0) {
  return numero + numero2
}

console.log(sumar(5, 10))
console.log(sumar(10))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function mayorNum(array) {
  let mayor = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i]
    }
  }
  return mayor;
}

let numeros = [0, 1, 2, 3, 4, 5, 10, 40, 1, 23]

console.log(mayorNum(numeros))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function numVocales(frase) {
  let vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ"
  let contador = 0
  for (let i = 0; i < frase.length; i++) {
    if (vocales.includes(frase[i])) {
      contador++
    }
  }
  return contador
}
let cadena = "Andrés Tomás ha perdido al FIFA con su cuñado el cuarentañero que lleva sin jugar al fifa 15 años"
console.log(numVocales(cadena))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

let strings = ["Andrés Tomás", "Salva", "Esperanza", "Cristobita", "Gema", "Denver"]

function convMayusculas(arrayAConvertir) {
  let nuevoArray = []
  for (let i = 0; i < arrayAConvertir.length; i++) {
    nuevoArray.push(arrayAConvertir[i].toUpperCase())
  }
  return nuevoArray
}

console.log(convMayusculas(strings))


// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function checkPrimo(testNumero) {
  for (let i = 2; i < testNumero; i++) {
    if (testNumero % i == 0) {
      return false
    }
  }
  return true
}

console.log(checkPrimo(64))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function repetidos(array1, array2) {
  let array3 = []

  for (let i = 0; i < array1.length; i++) {
    if (array1.includes(array2[i])) {
      array3.push(array1[i])
    }
  }
  return array3
}
let nuevacadenA = ["Cristobita", "Salva", "Antonio el de los palotes", "Denver", "Deku", "Luffy"]
console.log(repetidos(strings, nuevacadenA))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumarPares(numerosRandom) {
  let sumapares = 0;
  for (let i = 0; i < numerosRandom.length; i++) {
    if (numerosRandom[i] % 2 == 0) {
      sumapares += numerosRandom[i];
    }
  }
  return sumapares
}

let num = [1, 1, 1, 3, 3, 3, 5, 6, 7, 8, 3, 1330]

console.log(sumarPares(num))



// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function arrayAlCuadrado(arrayA) {
  let arrayResultado = []
  for (let i = 0; i < arrayA.length; i++) {
    arrayResultado.push(arrayA[i] ** 2)
  }
  return arrayResultado
}

let arrayPrueba = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arrayAlCuadrado(arrayPrueba))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function cadenaTexto(cadena1) {
  let cadenaVacia = ""

  for (let i = cadena1.length - 1; i >= 0; i--) {
    cadenaVacia += cadena1[i]
  }
  return cadenaVacia
}
let vocales = "aeiou"
console.log(cadenaTexto(vocales))

// 10. Crea una función que calcule el factorial de un número dado

function factorial(numero) {
  let factorial = numero


  for (let i = 1; i < numero; i++) {
    factorial *= i 
  }
  return factorial
}

console.log(factorial(10))