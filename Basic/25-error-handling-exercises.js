/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
/*
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

let numeroA = 2
let numeroB = 4

console.log(multiplicarPares(numeroA, numeroB))
// 6. Lanza varias excepciones según una lógica definida
let ejemplo = 4
let ejemplo1 = 4

if (ejemplo % 2 != 0 || ejemplo1 % 2 != 0) {
  throw new ResultError("Lo mismo de antes, o acaso eres tonto?")
}

if (ejemplo == 3) {
  throw new ResultError("Error 404")
}





// 7. Captura varias excepciones en un mismo try-catch

let experimento = 5
let alternativa = 6
function randomYo(experimento, alternativa) {
  if (experimento % 2 != 0 || alternativa % 2 != 0) {
    throw new ResultError("Lo mismo de antes, o acaso eres tonto?")
  }

  if (experimento == alternativa) {
    throw new Error("Error 404")
  }

  console.log(experimento + alternativa)

}

try {
  console.log(randomYo(experimento, alternativa))
} catch (ResultError) {
  if (experimento % 2 != 0) {
    experimento += 1
  }
  if (alternativa % 2 != 0) {
    alternativa += 1
  }
  console.log(experimento + alternativa)
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores


const valores = [3, 3.5, "Salvorio", "Antonio de los palotes", Math.PI]

for (let i = 0; i < valores.length; i++) {
  if (typeof valores[i] != "number") {
    throw new TypeError
  }
  try {
    console.log(` El valor ${valores[i]} es numérico y se puede pasar a Float `)
  } catch(TypeError) {
    console.log(` El valor ${valores[i]} no es numérico `)
  }
  console.log(valores[i])
}


*/

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

class ResultError extends Error {
  constructor(messaje) {
    super(messaje)

  }
}



function validarObjeto(objeto, propiedad) {
  if (Object.hasOwn(objeto, propiedad)) {
    return true
  }
  return false
}

let Salva = {
  name: "Salvorio",
  edad: 33,
  altura: 1.84
}

if (validarObjeto(Salva, "peso") == false) {
  throw new ResultError("Antonio de los palotes")
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10