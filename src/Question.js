export default class Question {
  constructor(question, answer, idTheme, nameTheme, colorTheme) {
    (this.question = question),
    (this.answer = answer),
    (this.theme = {
      id: idTheme,
      name: nameTheme,
      color: colorTheme
    });
  }
}
