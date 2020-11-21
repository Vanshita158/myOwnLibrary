var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1=createSprite(100,200,30,30);
  object1.shapeColor= "orange";
  object2=createSprite(400,200,30,30);
  object2.shapeColor= "orange";

  movingRect.velocityY = -5;
  
  object2.velocityY= +5;
}

function draw() {
  background(0,0,0);  

 bounceOff(movingRect,object2);
  drawSprites();
}
