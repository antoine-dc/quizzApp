export default class Player {
  constructor(idPlayer, namePlayer, theme, isActive = false, totalPoints = 0) {
    (this.idPlayer = idPlayer),
    (this.namePlayer = namePlayer),
    (this.theme = theme),
    (this.isActive = isActive),
    (this.totalPoints = totalPoints);
  }
}
