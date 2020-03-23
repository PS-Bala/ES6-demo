import { Animal } from "./animal.js";

// Access method
let animal = new Animal("Dog");
console.log(animal.greeting("barks"));

// How to access static method
Animal.echo("roof, roof");
