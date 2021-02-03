import Character from './../src/js/character.js';


describe('Character', () => {

  test('should correctly create a character object', () => {
    let player = new Character();
    expect(player.charName).toEqual("");
    expect(player.charClass).toEqual("");
  });
});