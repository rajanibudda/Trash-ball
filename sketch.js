
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var matterBody;
var groundObj, leftSide, rightSide;


function preload()
{
	
}

function setup() {
	createCanvas(2000, 850);
	rectMode(CENTER);
	
	var ball_options={
		inStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(100,200,20, ball_options);
	World.add(world, ball);
	
	groundObj=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100, 600, 20, 120);
	rightSide = new Ground(1400,600,20,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER)
  background(0);

  ellipse(ball.position.x, ball.position.y, 40, 40);
  groundObj.display();
  leftSide.display();
  rightSide.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		console.log('in up arrow');
		Matter.Body.applyForce(ball, ball.position,{x:85,y:-85});
	}
}
 





