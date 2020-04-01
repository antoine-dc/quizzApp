export default class Question {
  constructor(question, answer, idTheme, nameTheme, colorTheme, disabled = true) {
    (this.question = question),
    (this.answer = answer),
    (this.theme = {
      id: idTheme,
      name: nameTheme,
      color: colorTheme
    }), (this.disabled = disabled);
  }
}
