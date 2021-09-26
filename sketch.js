var hitbox1, hitbGroup;
var Fhitbox2;
var edges;
var SCORE=0;
//game states
var PLAY=1;
var END=0;



function preload(){

}

function setup(){
createCanvas(windowWidth, windowHeight);

hitbGroup = new Group();

/*hitbGroup.setCollider("rectangle",0,0,300,hitbGroup.height);
hitbGroup.debug = true;*/








}

function draw(){
  background("red");
  edges = createEdgeSprites();

  console.log(hitbGroup.y);
  
  
  //function to score point after juantapping the hitbox
  
  
  
  
  
  spawnHitbox1();


  drawSprites();
}

function spawnHitbox1(){
  hitbox1 = createSprite(200,200,15,15);
  hitbox1.shapeColor = "blue";
  hitbox1.velocityY = -5;
  hitbox1.lifetime = 166.6;

  hitbGroup.add(hitbox1);

}

function mouseClicked(){
  hitbGroup.destroyEach();
}


  

 
