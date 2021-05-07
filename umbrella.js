class Umbrella{
    constructor (x,y){
  var options={
 isStatic:true,

    }
    this.image=loadImage("walking_1.png")
    this.body=Bodies.circle(x,y,15,options);
    
    this.r=15;
    World.add(world,this.body);
    }
    display(){
       var pos=this.body.position
       imageMode(CENTER)
       image(this.image,pos.x,pos.y+17,300,300)
    }
 }