export class Animal {
  constructor(name) {
    this.name = name;
  }
  greeting(sound) {
    return `A ${this.name} ${sound}`;
  }
  static echo(msg) {
    console.log(msg);
  }
}
