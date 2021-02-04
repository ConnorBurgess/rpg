import Enemy from './../src/js/enemies.js';
import Character from './../src/js/character.js';
import { endTurn, playerAttack, enemyAttack } from './../src/js/battle.js';
describe('playerAttack()', () => {
  test('Enemy health should be decreased by 3', () => {
    let currentEnemy = new Enemy;
    let player = new Character;
    player.pseudocodeCharacter();
    currentEnemy.generateEnemy(Math.floor(Math.random() * 2) + 1);
    playerAttack(player, currentEnemy);
    expect(currentEnemy.enemyAttr.Willpower).toBeLessThan(10);
  });
});

describe('enemyAttack()', () => {
  test('player health should be decreased by 3', () => {
    let currentEnemy = new Enemy;
    let player = new Character;
    player.pseudocodeCharacter();
    currentEnemy.generateEnemy(Math.floor(Math.random() * 2) + 1);
    enemyAttack(player, currentEnemy);
    expect(player.charAttr.Willpower).toBeLessThan(10);
  });
});

describe('endTurn()', () => {
  test('should change computer and player object "active" properties to 1 and 0', () => {
    let player = new Character;
    player.pseudocodeCharacter();
    endTurn(player);
    expect(player.playerActive).toEqual(0);
  });
});
