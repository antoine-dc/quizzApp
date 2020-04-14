export default class Color {
  constructor(name, code, isAvailable = true) {
    (this.name = name),
    (this.code = code),
    (this.isAvailable = isAvailable);
  }
}
