var movingRect,fixedRect;


function setup() {
  createCanvas(600,600);

  movingRect = createSprite(100,300,90,40);
  movingRect.shapeColor = "red";

  fixedRect = createSprite(300,300,30,70);
  fixedRect.shapeColor = "red"
  movingRect.velocityX  = 4
  fixedRect.velocityX = -4
}

function draw() {
  background("skyblue"); 
  
  
  /*movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
      
    movingRect.shapeColor = "black";
    fixedRect.shapeColor = "black";
  }
  else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }

  console.log(movingRect.x - fixedRect.x)*/

if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
  && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
    movingRect.velocityX = movingRect.velocityX*(-1)
    fixedRect.velocityX = fixedRect.velocityX*(-1)
  }
  else if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
      movingRect.velocityY = movingRect.velocityY*(-1)
      fixedRect.velocityY = fixedRect.velocityY*(-1)
    }
  drawSprites();
}