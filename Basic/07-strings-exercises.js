/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let texto1 = "Salva es el "
let texto2 = "puto amo"

console.log(texto1.concat(texto2))

// 2. Muestra la longitud de una cadena de texto

console.log(texto1.length)

// 3. Muestra el primer y último carácter de un string

console.log(texto1[0] + texto1[texto1.length - 1])
console.log(texto2[0] + texto2[texto2.length - 1])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(`${texto1.toUpperCase()}
${texto1.toLowerCase()}`)


// 5. Crea una cadena de texto en varias líneas

console.log(`Salvorio el puto amo
  es dios vaya`)

// 6. Interpola el valor de una variable en un string
let texto3 = texto1 + texto2
console.log(texto3)


// 7. Reemplaza todos los espacios en blanco de un string por guiones

texto3 = texto3.replaceAll(" ", "-")
console.log(texto3)

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(texto3.indexOf("puto"))
console.log(texto3.indexOf("Periquito Pin Pin"))


// 9. Comprueba si dos strings son iguales

console.log(texto1 == texto1)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(texto1.length > texto2.length)
console.log(texto3.length == texto2.length)