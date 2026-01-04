/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

class Animal {
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log("El animal llamado " + this.name + " corre")
  }

  static sum(a, b) {
    return a + b;
  }
}



let animal = new Animal()
animal.name = "Alfredo"
console.log(animal)
animal.run()
console.log(Animal.sum(4, 6))

class Cat extends Animal {
  constructor(name, edad) {
    super(name)
    this.edad = edad
  }
  run() {
    console.log("El animal llamado " + this.name + " corre y tiene " + this.edad + " años")
  }
}



// 2. Añade un método a la clase que utilice las propiedades

// 3. Muestra los valores de las propiedades e invoca a la función

console.log(animal.name)

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático

// 6. Crea una clase que haga uso de herencia

let gato = new Cat("Garfield", 5)

gato.run()

let buho = new Animal("Pajarito")
buho.run()


// 7. Crea una clase que haga uso de getters y setters

class Cesur {
  #dni
  #nombre

  constructor(dni, nombre, edad) {
    this.#dni = dni
    this.#nombre = nombre
    this.edad = edad
  }

  get dni() {
    return this.#dni
  }

  set nombre(nombre) {
    this.#nombre = nombre
  }
  get nombre() {
    return this.#nombre
  }
}

let salva = new Cesur(255544234, "Salvorio,33")

console.log(salva.dni)
salva.nombre = "Antonio"
console.log(salva.nombre)


// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

// 10. Sobrescribe un método de una clase que utilice herencia 