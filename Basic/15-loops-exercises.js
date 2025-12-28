/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

/*for (let i = 1; i <= 20; i++) {
  console.log(i)
}
let i = 1
while (i <= 20) {
  console.log(i)
  i++
}
i = 1
do {
  console.log(i)
  i++
} while (i <= 20)
*/

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0

for (let i = 1; i <= 100; i++) {
  suma += i
}
console.log(suma)


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i)
  }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ["Esperanza", "Salva", "Esperancita", "Andrés Tomás", "Cristobita", "Amalia", "Salvador", "Gema"]

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i])
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let vocales = ["a", "e", "i", "o", "u"]
let nvocales = 0

let cadenaDeTexto = "Lorem ipsum tal tal aurorA VoreAAAAAAAAAAAAAAAAl".toLowerCase()

for (let letra of cadenaDeTexto) {
  if (vocales.includes(letra)) {
    nvocales++
  }
}
console.log(nvocales)
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let resultado = 1

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numeros.length; i++) {
  resultado *= numeros[i]
}
console.log(resultado)




// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log("Tabla de multiplicar del número 5")
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ` + 5 * i)
}


// 8. Usa un bucle para invertir una cadena de texto

let cadenaTexto = "Hola, soy Salva"
let cadenaInvertida = ""

for (let i = cadenaTexto.length - 1; i >= 0; i--) {
  cadenaInvertida += cadenaTexto[i]
}
console.log(cadenaInvertida)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0
let b = 1
for (let i = 0; i < 10; i++) {
  console.log(a)


  let siguiente = a + b
  a = b
  b = siguiente
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let arrayNumeros = [1, 2, 3, 67, 43, 21, 2, 3, 4, 5, 234]
let nuevoArray = []
for (let i = 0; i < arrayNumeros.length; i++) {
  if (arrayNumeros[i] > 10) {
    nuevoArray.push(arrayNumeros[i])
  }
  }

console.log(nuevoArray)