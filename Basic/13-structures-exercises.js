/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animales = ["perro", "gato", "hiena", "ciervo", "león"]

console.log(animales)
// 2. Añade dos más. Uno al principio y otro al final

animales.push("tigre")
animales.unshift("vaca")

console.log(animales)

// 3. Elimina el que se encuentra en tercera posición

animales.splice(2, 1)
console.log(animales)

// 4. Crea un set que almacene cinco libros

let libros = new Set(["el quijote", "los pilares de la tierra", "padre rico padre pobre", "el lazarillo de tormes", "aprende java en 2 días"])


console.log(libros)
// 5. Añade dos más. Uno de ellos repetido

libros.add("aprende javascript en 2 días")
libros.add("el lazarillo de tormes")
console.log(libros)

// 6. Elimina uno concreto a tu elección

libros.delete("el quijote")
console.log(libros)

// 7. Crea un mapa que asocie el número del mes a su nombre

let numeroMes = new Map([[1, "Enero"], [2, "Febrero"], [3, "Marzo"], [4, "Abril"], [5, "Mayo"]]);
console.log(numeroMes)



// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(numeroMes.has(5))
console.log(numeroMes.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano


numeroMes.set("Meses de verano", ["Junio", "Julio", "Agosto"])
console.log(numeroMes)



// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let arrayPrueba = ["Salva", 33, "Churriana", "Junior Developer"]
console.log(arrayPrueba)
let setPrueba = new Set(arrayPrueba)

setPrueba.delete(45)
console.log(setPrueba)

let mapTry = new Map([["Propietario", setPrueba]])
console.log(mapTry)
