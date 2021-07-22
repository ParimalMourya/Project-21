
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,left,right;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	let ball_options={
		isStatic:false,
		restitution:0.8,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(100,100,20);
	World.add(world,ball);

	groundObj = new Ground(width/2,670,width,20);
	left = new Ground(1000,600,20,120);
	right = new Ground(1200,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  ellipse(ball.position.x,ball.position.y,20);
  groundObj.display();
  left.display();
  right.display();
  Engine.update(engine);
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(ball,{x:0,y:0},{x:0.065,y:-0.08});
	}
}


