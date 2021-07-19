"use strict";

const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const $winsTitle = createElement('div', 'winsTitle');

class Hero {
  constructor(player, name, hp, img, weapon) {
    this.player = player;
    this.name =  name;
    this.hp = hp;
    this.img = img;
    this.weapon = weapon;
  }

  attack() {
    console.log(this.name + ' ' + 'Fight...')
  }
}

const srcHero = ['https://www.fightersgeneration.com/np2/char1/gifs/', 'https://thumbs.gfycat.com/'];

const scorpion = new Hero(1, 'Scorpion', 100, [`${srcHero[0]}scorp-mk1-stance.gif`, `${srcHero[0]}scorp-mk1-wins.gif`, `${srcHero[0]}scorp-mk1-diz.gif`], ['Кунаи', 'Секира', 'Длинный меч', 'Меч ниндзя', 'Мугай Рю', 'Танто']);
const reptile = new Hero(2, 'Reptile', 100, [`${srcHero[0]}reptile-mk1-stance2.gif`, `${srcHero[0]}reptile-mk1-wins.gif`, `${srcHero[1]}AdventurousBestAiredale-max-1mb.gif`], ['Ледяной скипетр', 'Ледяной меч'],);

function createElement(tag, className) {
  let $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

function createPlayer(player) {
  let $player = createElement('div', 'player' + player.player);
  document.body.prepend($player);

  let $progressbar = createElement('div', 'progressbar');
  $player.prepend($progressbar);

  let $life = createElement('div', 'life');
  $life.style.width = player.hp + '%';
  $progressbar.prepend($life);

  let $name = createElement('div', 'name');
  $name.innerText = player.name;
  $progressbar.append($name);

  let $character = createElement('div', 'character');
  $player.append($character);

  let $src = createElement('img');
  $src.src = player.img[0];
  $character.prepend($src);

  return $player;
}

function ramdomNumber() {
  let randomNum = Math.ceil(Math.random() * 20);

  return randomNum;
}

function changeHP(player1, player2) {
  const $player1Life = document.querySelector('.player' + player1.player + ' .life');
  const $player2Life = document.querySelector('.player' + player2.player + ' .life');
  const $player1Img = document.querySelector('.player1 .character img');
  const $player2Img = document.querySelector('.player2 .character img');

  player1.hp -= ramdomNumber();
  player2.hp -= ramdomNumber();
  $player1Life.style.width = player1.hp + '%';
  $player2Life.style.width = player2.hp + '%';

  if (player1.hp <= 0) {
    $arenas.append(playerWins(player2.name));
    $randomButton.disabled = true;
    $player1Life.style.width = '0px';
    $player2Img.src = player2.img[1];
    $player1Img.src = player1.img[2];
    $player2Img.style.height= '300px';
  }

  if (player2.hp <= 0) {
    $arenas.append(playerWins(player1.name));
    $randomButton.disabled = true;
    $player2Life.style.width = '0px';
    $player1Img.src = player1.img[1];
    $player2Img.src = player2.img[2];
    $player1Img.style.height= '300px';
  } 

  if (player1.hp <= 0 && player2.hp <= 0) {
    $arenas.append(playerDraw());
    document.querySelector('.winsTitle').style.display = 'none';
    $randomButton.disabled = true;
    $player1Img.src = player1.img[2];
    $player2Img.src = player2.img[2];
    $player1Img.style.height= '268px';
    $player2Img.style.height= '268px';
  }

}

function playerWins(name) {
  $winsTitle.innerText = name + ' wins';

  return $winsTitle;
}

function playerDraw() {
  const $draw = createElement('div', 'drawTitle');
  $draw.innerText = 'Draw';

  return $draw;
}

$randomButton.addEventListener('click', function() {
  changeHP(scorpion, reptile);
})

$arenas.append(createPlayer(scorpion));
$arenas.append(createPlayer(reptile));
