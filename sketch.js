const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
//Create multiple bobs, mulitple ropes varibles here

var bob1
var bob2
var bob3
var bob4
var bob5

var rope1
var rope2
var rope3
var rope4
var rope5

var roof;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var bob1_options={
		isStatic:false
	}
	bob1 = Bodies.rectangle(300,200,230,20,bob1_options)
	World.add(world,bob1)
	
	var bob2_options={
		isStatic:false
	}
	bob2 = Bodies.rectangle(350,200,230,20,bob2_options)
	World.add(world,bob2)
	
	var bob3_options={
		isStatic:false
	}
	bob3 = Bodies.rectangle(400,200,230,20,bob3_options)
	World.add(world,bob3)
	
	var bob4_options={
		isStatic:false
	}
	bob4 = Bodies.rectangle(450,200,230,20,bob4_options)
	World.add(world,bob4)
	
	var bob5_options={
		isStatic:false
	}
	bob5 = Bodies.rectangle(500,200,230,20,bob5_options)
	World.add(world,bob5)
	
	 rope1=new rope(bob1,roof,-80,0)
	 rope2=new rope(bob2,roof,-40,0)
	 rope3=new rope(bob3,roof,0,0)
	 rope4=new rope(bob4,roof,40,0)
	 rope5=new rope(bob5,roof,80,0)

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,30)
  ellipse(bob2.position.x,bob2.position.y,30)
  ellipse(bob3.position.x,bob3.position.y,30)
  ellipse(bob4.position.x,bob4.position.y,30)
  ellipse(bob5.position.x,bob5.position.y,30)
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
