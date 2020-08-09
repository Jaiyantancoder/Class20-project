var car,wall;
var deformation;
var speed,weight;

function setup() {

//Creating the canvas
createCanvas(1600,800);

//Creating the car
car = createSprite(30,400,50,20);
car.shapeColor = "white";

//Creating the wall
wall = createSprite(1200,400,200,height/2);
wall.shapeColor = "orange"; 

//Declaring speed and weight
speed = 40; 
weight = 5002;
car.velocityX = speed;

}

function draw() {

//Creating the background
background(0,0,0);

if(isTouching(car,wall)){
  
 car.velocityX = 0;

deformation = 0.5*weight*speed*speed/22509;

  }
  
if(deformation<100){

car.shapeColor = "green";

}

if(deformation<180 && deformation>100){

car.shapeColor = "yellow";

}

if(deformation>180){

car.shapeColor = "red";

}

drawSprites();

}



  




