
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ball1,ball2,ball3,ball4,ball5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(350,100,300,30);
	World.add(world,roof);

	//Create the Bodies Here.
	ball1 = new Ball(250,300);
	ball2 = new Ball(300,300);
	ball3 = new Ball(350,300);
	ball4 = new Ball(400,300);
	ball5 = new Ball(350,300);

	
rope1 = new Rope(ball1.body,roof.body,-100,0);
World.add(world,rope1);

rope2 = new Rope(ball2.body,roof.body,-50,0);
World.add(world,rope2);

rope3 = new Rope(ball3.body,roof.body,0,0);
World.add(world,rope3);

rope4 = new Rope(ball4.body,roof.body,+50,0);
World.add(world,rope4);

rope5 = new Rope(ball5.body,roof.body,+100,0);
World.add(world,rope5);




	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  Engine.update(engine);


  roof.display();


  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.body.applyForce(ball1.body,ball1.body.position,{x:-730,y:0});
	}
}



