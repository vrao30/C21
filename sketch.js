var fixedRect, movingRect;
var r1,r2 
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "pink";
  movingRect = createSprite(50,200,80,30);
  movingRect.shapeColor = "green";


  r1 = createSprite(100, 500, 20, 80);
  r2 = createSprite(500,300,80,30);
  r1.shapeColor = "yellow";
  r2.shapeColor = "purple";


}

function draw() {
  background(0,0,0);  
  

  r1.x = World.mouseX;
  r1.y = World.mouseY;
 if (collision(r1,r2)){
  r1.shapeColor = "red";
  r2.shapeColor = "red";
 }
 else{
  r1.shapeColor = "yellow";
  r2.shapeColor = "purple";
 }
  
  drawSprites();
}
