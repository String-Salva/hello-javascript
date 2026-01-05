/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch

let a = "salvorio"
let b = 6

function dividir(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    throw new Error("No se pueden dividir parámetros no numéricos")
  }
  return a / b
}

try {
  console.log(dividir(a, b))
} catch (Error) {
  if (typeof a != "number") {
    a = 1
  }
  if (typeof b != "number") {
    b = 1
  }
  console.log(dividir(a, b))
}




// 2. Captura una excepción utilizando try-catch y finally

try {
  console.log(dividir(a, b))
} catch (Error) {
  if (typeof a != "number") {
    a = 1
  }
  if (typeof b != "number") {
    b = 1
  }

} finally {
  console.log(dividir(a, b))
}


// 3. Lanza una excepción genérica

let c = 1
let d = "antonio"
function sumar(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    throw new TypeError("No se puede hacer esto payaso")
  }
  return a + b
}

try {
  console.log(sumar(c, d))
} catch (TypeError) {
  console.log("No se puede hacer porque uno de los dos valores no es un número pedazo de Gilipollas")
}

// 4. Crea una excepción personalizada


class ResultError extends Error {
  constructor(message) {
    super(message)
  }
}

// 5. Lanza una excepción personalizada


function multiplicarPares(a, b) {
  if (a % 2 != 0 || b % 2 != 0) {
    throw new ResultError("Esta función no te vale para los valores que me pides bro")
  }

  if (a < 0 || b < 0) {
    throw new Error("Los números no pueden ser negativos subnormal")
  }
  return a * b
}

let numeroA = 1
let numeroB = 4

console.log(multiplicarPares(numeroA,numeroB))
// 6. Lanza varias excepciones según una lógica definida

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10