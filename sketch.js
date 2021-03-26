var canvas;
var gameState=0;
var snakeCount;
var distance;
var allSnakes;
var database;

var form,game,snake;
var snake1,snake2;
var snakes;

var obstaclesGroup


function setup() {


  createCanvas(displayWidth-20,displayHeight-30);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

  obstaclesGroup = createGroup();
}

function draw() {
  background(255,255,255);  

  if(snakeCount ===2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    spawnObstacles();
  }
  
}

function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -(6 );
    
     //generate random obstacles
   
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
 }