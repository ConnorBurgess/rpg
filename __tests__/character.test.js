import Character from './../src/js/character.js';


describe('Character', () => {
  let player; 

  beforeEach(() => {
    player = new Character();
  });
 
  test('should correctly create a character object', () => {
    expect(player.charName).toEqual("");
    expect(player.charClass).toEqual("");
    expect(player.charAttr).toEqual({});
    expect(player.charId).toEqual(0);
  });

  test('Should create a method that assigns default values to player.(charName, charClass, charAttr, charId', () => {
    player.pseudocodeCharacter();
    expect(player.charName).toEqual("Joe");
    expect(player.charClass).toEqual("Pseudocode");
    expect(player.charAttr).toHaveProperty("WPM", 180); 
    expect(player.charAttr).toHaveProperty("Willpower", 10);
    expect(player.charId).toEqual(1); 
  });

  test('should create a method that assigns python values to player.(charName, charClass, charAttr, charId', () => {
    player.pythonCharacter();
    expect(player.charName).toEqual("Snape");
    expect(player.charClass).toEqual("Python");
    expect(player.charAttr).toHaveProperty("WPM", 40);
    expect(player.charAttr).toHaveProperty("Willpower", 40);
    expect(player.charId).toEqual(2);
  });

  test('should create a method that assigns javascript values to player.(charName, charClass, charAttr, charId', () => {
    player.javascriptCharacter();
  expect(player.charName).toEqual("Travis");
  expect(player.charClass).toEqual("Javascript");
  expect(player.charAttr).toHaveProperty("WPM", 80);
  expect(player.charAttr).toHaveProperty("Willpower", 60);
  expect(player.charId).toEqual(3);
  });
});