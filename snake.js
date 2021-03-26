class Snake{

    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
      }
    
      getCount(){
        var snakeCountRef = database.ref('snakeCount');
        snakeCountRef.on("value",(data)=>{
          snakeCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
          snakeCount: count
        });
      }
    
      update(){
        var snakeIndex = "players/player" + this.index;
        database.ref(snakeIndex).set({
          name:this.name,
          distance:this.distance
        });
      }
    
      static getSnakeInfo(){
        var snakeInfoRef = database.ref('snakes');
        snakeInfoRef.on("value",(data)=>{
          allSnakes = data.val();
        })
      }




}