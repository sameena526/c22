
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myEngine,  world;
var ground, ball;

function setup() {
  var canvas = createCanvas(400,400);
     myEngine=Engine.create();
     world=myEngine.world;

     ball_options={
      restitution:0.5
     }

     ball=Bodies.circle(100,200,20,ball_options);
     World.add(world,ball);

     ground_options={
       isStatic:true
     }
     ground=Bodies.rectangle(200, 320,400,50,ground_options);
     World.add(world,ground);
console.log(ball);

}

 

function draw() {
  background(0); 
  Engine.update(myEngine); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50);
  ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
}