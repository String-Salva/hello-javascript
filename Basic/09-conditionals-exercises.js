/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let minombre = "Periquito"

if (minombre == "Salva") {
  console.log("Mi nombre es " + minombre)

} else if (minombre == "Antonio") {
  console.log(`Mi nombre es ${minombre}`)
} else {
  console.log("Mi nombre no es ni Salva ni Antonio")
}


// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "salvorio92"
let contraseña = "Salvorio1992"

if (usuario == "salvorio92" && contraseña == "Salvorio1992") {
  console.log("Inicio de sesión con éxito")
} else {
  console.log("El nombre de usuario o la contraseña no son correctos")
}


// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = 0

if (numero == 0) {
  console.log("El número es 0, ni es positivo ni negativo")
} else if (numero < 0) {
  console.log("El número es negativo")
} else {
  console.log("El número es positivo bro")
}


// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 20
let mayordeEdad
if (edad >= 18) {
  mayordeEdad = true
} else {
  mayordeEdad = false
}

const mensaje = mayordeEdad ? `Sí puede votar` : `No puede votar, le quedan ${18 - edad} años para poder hacerlo`
console.log(mensaje)



// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let etapa = edad > 18 ? "adulto" : "menor"

console.log(etapa)


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let estacion
let mes = 6

if (mes > 0 && mes < 4) {
  estacion = "Invierno"
} else if (mes > 3 && mes < 7) {
  estacion = "Primavera"
} else if (mes > 6 && mes < 10) {
  estacion = "Verano"
} else if (mes > 9 && mes < 13) {
  estacion = "Otoño"
} else {
  estacion = "Mes introducido erróneo"
}

console.log(estacion)



// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let dias

if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 9 || mes == 12) {
  dias = 31
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
  dias = 30
} else if (mes == 2) {
  dias = 28
} else {
  dias = "Numero de días mal introducido"
}

console.log(dias)


// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let greetings
let idioma = "Italiano"

switch (idioma) {
  case "Español":
    greetings = "Saludos bro!"
    break

  case "Inglés":
    greetings = "Hello bro!"
    break

  case "Francés":
    greetings = "Bonjour mon frère"
    break

  default:
    greetings = "Idioma no reconocido"
}

console.log(greetings)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (mes) {
  case 1:
  case 2:
  case 3:
    estacion = "invierno"
    break

  case 4:
  case 5:
  case 6:
    estacion = "primavera"
    break

  case 7:
  case 8:
  case 9:
    estacion = "verano"
    break

  case 10:
  case 11:
  case 12:
    estacion = "otoño"
    break

  default:
    estacion = "Número de mes erróneo"
}
console.log(estacion)

// 10. Usa un switch para hacer de nuevo el ejercicio 7





switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 9:
  case 12:
    dias = 31
    break


  case 4:
  case 6:
  case 9:
  case 11:
    dias = 30
    break

  case 2:
    dias = 28
    break

  default:
    dias = "Número de mes erróneo"
}

console.log(dias)