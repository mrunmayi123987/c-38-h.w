class Game{

    constructor(){}

    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        snake = new Snake();
        var snakeCountRef = await database.ref('snakeCount').once("value");
        if(snakeCountRef.exists()){
          snakeCount = snakeCountRef.val();
          snake.getCount();
        }
        form = new Form()
        form.display();
  
        snake1 = createSprite(100,200);
        snake2 = createSprite(300,200);
        
        snakes=[snake1,snake2];
  
      }
  
  
    }
  
    play(){
      form.hide();
      textSize(30);
      text("Game Start", 120, 100)
     snake.getSnakeInfo();
        
  
      if(allSnakes !== undefined){
        var display_position = 130;
  
        var index=0,x=0,y;
  
        for(var sn in allSnakes){
  
          index=index+1;
          x=x+200;
          y=displayHeight-allSnakes[sn].distance;
          snakes[index-1].x=x;
          snakes[index-1].y=y;
  
      
          
  
          if (sn === "snakes" + snake.index)
            //fill("red")
        snakes[index-1].shapeColor="red";
          else
            //fill("black");
  
           camera.position.x=displayWidth/2;
           camera.position.y=snakes[index-1].y;
  
          display_position+=20;
         
        }
      }
  
      if(keyIsDown(UP_ARROW) && snake.index !== null){
        snake.distance +=50
        snake.update();
      }

      
     
  drawSprites();
  
    }

}