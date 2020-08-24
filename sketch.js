function setup() {
  createCanvas(1600,400);
 
  var wall,thickness;
 
  var bullet,speed,weight;
 
}

function draw() {
  background(255,0,0);  
  
  weight = random(30,50)
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2 );
  wall.shapeColor=color(80,80,80);
 bullet = createSprite(400, 200, 100, 50);
 speed = random(223,321);
  bullet.velocityX=speed;
  bullet.collide(wall);
  drawSprites();
}