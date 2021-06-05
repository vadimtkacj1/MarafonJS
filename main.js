"use strict";

let $arenas = document.querySelector('.arenas');
let $randomButton = document.querySelector('.button');
let $winsTitle = createElement('div', 'winsTitle');

let scorpion = {
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: ['https://www.fightersgeneration.com/np2/char1/gifs/scorp-mk1-stance.gif', 'https://www.fightersgeneration.com/np2/char1/gifs/scorp-mk1-wins.gif', 'https://www.fightersgeneration.com/np2/char1/gifs/scorp-mk1-diz.gif'],
  weapon: ['Кунаи', 'Секира', 'Длинный меч', 'Меч ниндзя', 'Мугай Рю', 'Танто'],
  attack: function() {
      console.log(this.name + 'Fight...')
  },
}

let reptile = {
  player: 2,
  name: 'Reptile',
  hp: 100,
  img: ['https://www.fightersgeneration.com/np2/char1/gifs/reptile-mk1-stance2.gif', 'https://www.fightersgeneration.com/np2/char1/gifs/reptile-mk1-wins.gif', 'https://thumbs.gfycat.com/AdventurousBestAiredale-max-1mb.gif'],
  weapon: ['Ледяной скипетр', 'Ледяной меч'],
  attack: function() {
    console.log(this.name + ' ' + 'Fight...')
  },  
}

function createElement(tag, className) {
  let $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

function createPlayer(obj) {
  let $player = createElement('div', 'player' + obj.player);
  document.body.prepend($player);

  let $progressbar = createElement('div', 'progressbar');
  $player.prepend($progressbar);

  let $life = createElement('div', 'life');
  $life.style.width = obj.hp + '%';
  $progressbar.prepend($life);

  let $name = createElement('div', 'name');
  $name.innerText = obj.name;
  $progressbar.append($name);

  let $character = createElement('div', 'character');
  $player.append($character);

  let $src = createElement('img');
  $src.src = obj.img[0];
  $character.prepend($src);

  return $player;
}

function ramdomNumber() {
  let randomNum = Math.ceil(Math.random() * 20);

  return randomNum;
}

function changeHP(player1, player2) {
  let $player1Life = document.querySelector('.player' + player1.player + ' .life')
  let $player2Life = document.querySelector('.player' + player2.player + ' .life')

  if (player1.hp > 0 || player2.hp > 0) {    
    player1.hp -= ramdomNumber();
    player2.hp -= ramdomNumber();
    $player1Life.style.width = player1.hp + '%';
    $player2Life.style.width = player2.hp + '%';
  }

  if (player1.hp <= 0) {
    $arenas.append(playerWins(player2.name));
    $randomButton.disabled = true;
    console.log(player1.hp, player2.hp);
    $player1Life.style.width = '0px'
    document.querySelector('.player2 .character img').src = player2.img[1];
    document.querySelector('.player1 .character img').src = player1.img[2];
    document.querySelector('.player2 .character').style.height= '300px';
  }

  if (player2.hp <= 0) {
    $arenas.append(playerWins(player1.name));
    $randomButton.disabled = true;
    console.log(player1.hp, player2.hp);
    $player2Life.style.width = '0px';
    document.querySelector('.player1 .character img').src = player1.img[1];
    document.querySelector('.player2 .character img').src = player2.img[2];
    document.querySelector('.player1 .character').style.height= '300px';
  } 

  if (player1.hp <= 0 && player2.hp <= 0) {
    $arenas.append(playerDraw());
    document.querySelector('.winsTitle').style.display = 'none';
    $randomButton.disabled = true;
    document.querySelector('.player1 .character img').src = player1.img[2];
    document.querySelector('.player2 .character img').src = player2.img[2];
    document.querySelector('.player1 .character').style.height= '268px';
    document.querySelector('.player2 .character').style.height= '268px';
  }

}

function playerWins(name) {
  $winsTitle.innerText = name + ' wins';

  return $winsTitle;
}

function playerDraw() {
  let $draw = createElement('div', 'drawTitle');
  $draw.innerText = 'Draw';

  return $draw;
}

$randomButton.addEventListener('click', function() {
  console.log(scorpion.hp, reptile.hp);

  changeHP(scorpion, reptile);
})

$arenas.append(createPlayer(scorpion));
$arenas.append(createPlayer(reptile));
