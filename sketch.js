
var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
 speed = random(50,100);
 weight = random(400,1500);

 car = createSprite(50,200,50,50);
 wall = createSprite(1500,200,60,height/2);
 wall.shapeColor = 80,80,80;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  car.velocityX = speed;

  if(wall.x-car.x < (car.width-wall.width)/2){
    car.velocityX = 0;
    var destruction = weight * speed * 0.5 * speed/22509;
    if(destruction> 180){
      car.shapeColor = color(150,70,240);

    }
    if(destruction<180 && destruction>100){
      car.shapeColor = color(255,0,0);
    }

    if(destruction<100){
      car.shapeColor = color(200,255,200);
    }
  }
}