//boxes,edges
let hitbox;
let Edges;

//score
let Taps = 0;
let WrongsTaps = 0;

//gameState
let PLAY = 1;
let END = 0;
let gameState = PLAY;




function setup() {
  createCanvas(400, 400);
  hitbox = createSprites(20,300,10,10);
  Edges = createEdgeSprites;

  
   
}
  
  

function draw() {
  background("grey");

  hitbox.velocityY = -3;
  hitbox = ("blue");
  fill(hitbox);
  

  

drawSprites();
}
 
