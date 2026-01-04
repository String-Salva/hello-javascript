/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let esperancita = {
  name: "Espe",
  age: 30,
  job: "farmacéutica",

}


// 2. Accede y muestra su valor

console.log(esperancita.name)
console.log(esperancita.age)
console.log(esperancita.job)


// 3. Agrega una nueva propiedad
esperancita.pet = "Denver"
console.log(esperancita.pet)
console.log(esperancita)

// 4. Elimina una de las 3 primeras propiedades

delete esperancita.name
console.log(esperancita)

// 5. Agrega una función e invócala
esperancita.work = function () {
  console.log("Esperancita trabaja")
}
console.log(esperancita)
esperancita.work()


// 6. Itera las propiedades del objeto

for (let propiedad in esperancita) {
  console.log(`${propiedad} : ${esperancita[propiedad]}`)
}

console.log(`${esperancita.age} es lo mismo que ${esperancita["age"]}`)

// 7. Crea un objeto anidado

let denver = {
  name: "denver",
  age: 5,
  noviaDeDenver: {
    name: "denvera",
    age: 3,
    novio: {
      name: "denversito",
      age: 5
    }
  }
}

let denver1 = {
  name: "denver",
  age: 5,
  noviaDeDenver: {
    name: "denvera",
    age: 3,
    novio: {
      name: "denversito",
      age: 5
    }
  }
}
console.log(denver)

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(`${denver.name} es el nombre del perro y ${denver.noviaDeDenver.novio.age} es la edad del novio de la novia de ${denver.name}`)


// 9. Comprueba si los dos objetos creados son iguales
console.log(denver == denver1)



// 10. Comprueba si dos propiedades diferentes son iguales
console.log(denver.name == denver1.name)
console.log(denver.name === denver1.name)