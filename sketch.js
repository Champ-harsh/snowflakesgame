 Engine = Matter.Engine;
  World = Matter.World;
  Events = Matter.Events;
  Bodies = Matter.Bodies;
 

var bg, snowflakes;
var engine,world;

function preload(){
 bg = loadImage("snow1.jpg");
snowimage = loadImage("snow4.webp");

}

function setup(){
   createCanvas(800,400);
 
   //snowflakes = new SnowFlakes(random(100,700),-10);
  

 
        
     
       
   

  
      }


function draw() {
  background(bg);  


 if(frameCount%60===0) {
  s1 =  createSprite(400,200,50,50);
  s1.addImage(snowimage);
  s1.x = Math.round(random(100,700))
  s1.y = -10;
  s1.scale = 0.2;
  s1.velocityY = 2;
  
 
 }

 
 


  
  drawSprites();
}