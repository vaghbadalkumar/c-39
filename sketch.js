var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game, car1, car2, car3, car4, cars


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
 car1 = createSprite(100,200);
 car2 = createSprite(300,200);
 car3 = createSprite(500,200);
 car4 = createSprite(700,200);
                               
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
