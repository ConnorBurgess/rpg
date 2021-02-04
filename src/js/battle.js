import Enemy from './enemies.js';
import Character from './character.js';

  //Declare global vars (ordinarily in UI Logic)
  //  let currentEnemy = new Enemy;
  //  let player = new Character;
  //  player.pseudocodeCharacter();
  //  currentEnemy.generateEnemy(Math.floor(Math.random() * 2) + 1);


export function playerAttack(player, currentEnemy){
  currentEnemy.enemyAttr.Willpower - player.charAttr.WPM;
  console.log(`${player.charName} hit ${currentEnemy.enemyName} for ${player.charAttr.WPM}. ${currentEnemy.enemyName} has ${currentEnemy.enemyAttr.Willpower} willpower left!`);
}

export function enemyAttack(player, currentEnemy){
  player.charAttr.Willpower = player.charAttr.Willpower - currentEnemy.enemyAttr.WPM;
  console.log(`${currentEnemy.enemyName} hit ${player.charName} for ${currentEnemy.enemyAttr.WPM}. ${player.charName} has ${player.charAttr.Willpower} willpower left!`);
}

export function endTurn(player){
  player.playerActive = 0;
  console.log(player.playerActive)
}