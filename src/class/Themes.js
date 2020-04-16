export default class Themes {
  constructor(name, questions = [], isThemeGeneralCulture = false) {
    (this.id = Date.now()),
    (this.name = name),
    (this.questions = questions),
    (this.isThemeGeneralCulture = isThemeGeneralCulture);
  }
}
