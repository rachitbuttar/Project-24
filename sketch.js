
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 rubber1 = new Rubber(100,100);
    hammer1=new Hammer(200,200)
	stone1=new Stone(100,200)
	iron1=new Iron (300,300)
    ground1=new Ground(400,700,800,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
hammer1.display();
stone1.display();
iron1.display();
rubber1.display();
 ground1.display();
}



