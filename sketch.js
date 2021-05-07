const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var engine,world
var drops=[]
var maxDrops=100

function preload(){
    
}

function setup(){
createCanvas(800,700);


engine = Engine.create();
world=engine.world

    


umbrella=new Umbrella(200,500);
if(frameCount%150===0){
    for(var i=0;i<maxDrops;i++){
        drops.push(new Drop(random (0,400),random(0,400)))
    }

}
    
}

function draw(){
    rectMode(CENTER)
    background(0);

    umbrella.display()
    for (var i=0;i<maxDrops;i++){
        drops[i].showDrop();
drops[i].updateY();
    }
}   

