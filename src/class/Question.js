export default class Question {
  constructor(label, answer, theme, disabled = true) {
    (this.label = label),
    (this.answer = answer),
    (this.theme = theme),
    (this.disabled = disabled);
  }
}
