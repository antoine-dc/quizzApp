export default class Question {
  constructor(label, answer, disabled = true) {
    (this.label = label),
    (this.answer = answer),
    (this.disabled = disabled);
  }
}
