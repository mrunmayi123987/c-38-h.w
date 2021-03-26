class Form{

    constructor() {
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
      }
      hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
      }
    
      display(){
        var title = createElement('h2')
        title.html("Hungry Snake Game");
        title.position(displayWidth/2, 0);
    
        this.input.position(displayWidth/2, displayHeight/3);
        this.button.position(displayWidth/2, displayHeight/2);
    
        this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          snake.name = this.input.value();
          snakeCount+=1;
          snake.index = snakeCount;
          snake.update();
          snake.updateCount(snakeCount);
          this.greeting.html("Hello " + snake.name)
          this.greeting.position(displayWidth/2, displayHeight/2+50);
        });
    
      }

}