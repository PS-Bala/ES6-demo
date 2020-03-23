import { Animal } from "./animal.js";

export class Canine extends Animal {
  constructor() {
    super("canine");
  }
  static echo() {
    super.echo("bow wow");
  }
}

Canine.echo();
