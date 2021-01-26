class Umbrella{
    constructor(x,y){
       var options={
           isStatic
       }
       this.body = Bodies.circle(this.x,this.y,options);
       this.x = x;
       this.y = y;
       World.add(world,this.body);
    }
    display(){
        image4 = loadImage("sprites/walking_1.png");
        image4.addImage(image4);
    }
}