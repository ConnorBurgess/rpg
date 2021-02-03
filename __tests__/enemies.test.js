import Enemy from './../src/js/enemies.js';

describe('Enemy', () => {
  let enemy;
  beforeEach(() => {
  enemy = new Enemy;
  });

  test('should correctly create an enemy object', () => {
    expect(enemy.enemyName).toEqual("");
    expect(enemy.enemyClass).toEqual("");
    expect(enemy.enemyAttr).toEqual({});
    expect(enemy.enemyId).toEqual(0);
  });

  test('should create a method that assigns syntaxError values to enemy.(enemyName, enemyClass, enemyAttr, enemyId', () => {
    enemy.syntaxError();
    expect(enemy.enemyName).toEqual("Missing: ;");
    expect(enemy.enemyClass).toEqual("Syntax Error");
    expect(enemy.enemyAttr).toHaveProperty("WPM", 3);
    expect(enemy.enemyAttr).toHaveProperty("Willpower", 5);
    expect(enemy.enemyId).toEqual(1)
  })
});