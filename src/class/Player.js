export default class Player {
  constructor(idPlayer, namePlayer, theme, color, isActive = false, totalPoints = 0) {
    (this.idPlayer = idPlayer),
    (this.namePlayer = namePlayer),
    (this.theme = theme),
    (this.color = color),
    (this.isActive = isActive),
    (this.totalPoints = totalPoints);
  }
}
