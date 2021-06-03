"use strict";

let scorpion = {
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Кунаи', 'Секира', 'Длинный меч', 'Меч ниндзя', 'Мугай Рю', 'Танто'],
  attack: function() {
      console.log(this.name + 'Fight...')
  },
}

let subZero= {
  name: 'Sub-Zero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['Ледяной скипетр', 'Ледяной меч'],
  attack: function() {
    console.log(this.name + ' ' + 'Fight...')
  },  
}

function createPlayer(player, obj) {
  let $player = document.createElement('div');
  $player.classList.add(player);
  document.body.prepend($player);

  let $progressbar = document.createElement('div');
  $progressbar.classList.add('progressbar');
  $player.prepend($progressbar);

  let $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = obj.hp + '%';
  $progressbar.prepend($life);

  let $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = obj.name;
  $progressbar.append($name);

  let $character = document.createElement('div');
  $character.classList.add('character');
  $player.append($character);

  let $src = document.createElement('img');
  $src.src = obj.img;
  $character.prepend($src);

  let arenas = document.querySelector('.arenas');
    arenas.append($player);
}

createPlayer('player1', scorpion);
createPlayer('player2', subZero);

