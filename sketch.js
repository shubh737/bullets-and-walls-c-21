var thickness,wall;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  
  bullet=createSprite(50, 200, 40,5);
bullet.shapeColor=color(255);


wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=(80,80,80);


speed = random(223,321);
weight = random(30,52);

thickness=random(22,83);

bullet.velocityX = speed;
}

function draw() {

  background("black");
  

  bullet.collide(wall);
  drawSprites();

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;

 bullet.collide(wall);
    var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);
    if(damage > 10)
    {
      wall.shapeColor = color("red");
    }
    else
     {
      wall.shapeColor = color("green");
    }
  }
}


function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.X+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}

return false;


}