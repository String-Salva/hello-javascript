/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let numeros = [1, 2, 3, 4, 5]

let [uno, dos] = numeros

console.log(uno)
console.log(dos)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let nombres = ["Esperanza", "Salva", "Denver", "Esperancita"]

let [noviaSalva, NovioEspe, HijoEspe, HijaSalva, Cristobita = "Hermano de Espe"] = nombres

console.log(noviaSalva)
console.log(NovioEspe)
console.log(HijaSalva)
console.log(HijoEspe)
console.log(Cristobita)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let Esperancita = {
  name: "Espe",
  age: 30,
  eyeColour: "green",
}
let { name, age } = Esperancita

console.log(name)
console.log(age)


// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let Cristobital = {
  name: "Cristobal",
  age: 19,
  eyeColour: "brown"
}

let { name: nombre, eyeColour: colorOjos } = Cristobital

console.log(nombre)
console.log(colorOjos)



// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let ropero = {
  name: "Espe",
  age: 30,
  eyeColour: "green",
  espe: {
    name: "esmeralda",
    age: 33,
    eyeColour: "blue"
  }

}

let { name: nombre1, espe: { eyeColour: colordeOjitos } } = ropero
console.log(nombre1)
console.log(colordeOjitos)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let array1 = [1, 2, 3, 4, 5]
let array2 = ["Esperanza", "Salva"]

let array3 = [...array1, ...array2]
console.log(array3)
console.log(array2)

// 7. Usa propagación para crear una copia de un array

let array4 = array2
array4 = [...array2]
console.log(array4)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let AndresTomas = {
  name: "andr3s0te",
  age: 22,
  height: 1.90
}

let CristobalMartin = {
  nombre: "Cristobita",
  edad: 19,
  altura: 1.91
}

let mezclaHermanos = { ...AndresTomas, ...CristobalMartin }
console.log(mezclaHermanos)

// 9. Usa propagación para crear una copia de un objeto

let mezcla2 = {...mezclaHermanos}
console.log(mezcla2)

const mezcla3 = mezcla2
console.log(mezcla3)

// 10. Combina desestructuración y propagación

let random = [1,"Antonio",4,5,"Salvorio"]
let random1 = [5,6,7,8,9]

let [random3,random5,random6] = [...random1]
console.log(random3)
console.log(random5)
console.log(random6)