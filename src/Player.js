export default class Player {
  constructor(idPlayer, namePlayer, theme, totalPoints = 0) {
    (this.idPlayer = idPlayer),
    (this.namePlayer = namePlayer),
    (this.theme = theme),
    (this.totalPoints = totalPoints);
  }
}
