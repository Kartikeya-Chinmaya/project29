const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ground1;
var ground2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25;
var Polygon,PolygonImg,ball;
var Sling;


function preload(){
 PolygonImg = loadImage("polygon.png");

}


function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;
    
ground1 = new Ground(500,450,240,20);
ground2 = new Ground(1090,250,200,20);
block1 = new Block(420,420,25,45);
block2 = new Block(445,420,25,45);
block3 = new Block(470,420,25,45);
block4 = new Block(495,420,25,45);
block5 = new Block(520,420,25,45);
block6 = new Block(545,420,25,45);
block7 = new Block(570,420,25,45);
block8 = new Block(445,375,25,45);
block9 = new Block(470,375,25,45);
block10 = new Block(495,375,25,45);
block11 = new Block(520,375,25,45);
block12 = new Block(545,375,25,45);
block13 = new Block(470,330,25,45);
block14 = new Block(495,330,25,45);
block15 = new Block(520,330,25,45);
block16 = new Block(495,285,25,45);

    
block17 = new Block(1040,220,25,45);
block18 = new Block(1065,220,25,45);
block19 = new Block(1090,220,25,45);
block20 = new Block(1115,220,25,45);
block21 = new Block(1140,220,25,45);
block22 = new Block(1065,175,25,45);
block23 = new Block(1090,175,25,45);
block24 = new Block(1115,175,25,45);
block25 = new Block(1090,130,25,45);

ground = new Ground(0,560,180000,20);
ball = Bodies.circle(50,250,20);
World.add(world,ball);

Sling = new sling(this.ball,{x:100,y:250});

}

function draw(){
    background("magenta");
  rectMode(CENTER);

  


image(PolygonImg,ball.position.x,ball.position.y,40,40);


    ground1.display();
    ground2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    ground.display();
    //Polygon.display();
    Sling.display();
  //  fill("red");
   
}



//function detectollision(lPolygon,lblock){
  //blockBodyPosition = lblock.body.position;
  //PolygonBodyPosition = lPolygon.body.position;
  
  //var distance = dist(PolygonBodyPosition.x,PolygonBodyPosition.y,blockBodyPosition.x,blockBodyPosition.y);
  //if(distance <= lblock.r + lpolygon.r){
    //Matter.Body.setStatic(lblock.body,false);
  //}
  
  //}
  
  
  function mouseDragged(){
      Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
      Sling.fly();
      
  }