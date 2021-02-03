//Business Logic
export default class Character {
  constructor() {
    this.charName = "";
    this.charClass = "";
    this.charAttr = {};
    this.charId = 0;
  }

//Character class methods
  pseudocodeCharacter () {
    this.charName = "Joe";
    this.charClass = "Pseudocode";
    this.charAttr = {WPM: 180, Willpower: 10};
    this.charId = 1;
  }

  pythonCharacter() {
    this.charName = "Snape";
    this.charClass = "Python";
    this.charAttr = {WPM: 40, Willpower: 40};
    this.charId = 2;
  }

  javascriptCharacter() {
    this.charName = "Travis";
    this.charClass = "Javascript";
    this.charAttr = {WPM: 80, Willpower: 60};
    this.charId = 3;
  }


}

//Test area
