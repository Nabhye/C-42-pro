class Drops{
    constructor(x,y){
      var options={
          isStatic
      }
      this.body = Bodies.ciecle(x,y,options);
      this.x = x;
      this.y = y;
    World.add(world,this.body);
    }
    display(){
      if(drops.isTouching(bottom)){
        drops.visible = true;
      }
      ellipse(x,y,70,70);
    }
}