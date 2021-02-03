export default class Enemy {
  constructor() {
    this.enemyName = "";
    this.enemyClass = "";
    this.enemyAttr = {};
    this.enemyId = 0;
  }

  syntaxError() {
    this.enemyName = "Missing: ;";
    this.enemyClass = "Syntax Error";
    this.enemyAttr = {WPM: 3, Willpower: 5};
    this.enemyId = 1;
  }
}