const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ground1, polygon, polygonImg;
var engine, world;
var slingShot;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;

function preload(){
	polygonImg = loadImage("polygon.png")
}

function setup() {
	createCanvas(1800, 700);

	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	ground1 = new Ground(900,600,1800,20);
	ground = new Ground(640,470,350,20);
	
	box1 = new Box(520,440,40,40);
	box2 = new Box1(560,440,40,40);
	box3 = new Box(600,440,40,40);
	box4 = new Box1(640,440,40,40);
	box5 = new Box(680,440,40,40);
	box6 = new Box1(720,440,40,40);
	box7 = new Box(760,440,40,40);
	
	box8 = new Box1(560,400,40,40);
	box9 = new Box(600,400,40,40);
	box10 = new Box1(640,400,40,40);
	box11 = new Box(680,400,40,40);
	box12 = new Box1(720,400,40,40);

	box13 = new Box(600,360,40,40);
	box14 = new Box1(640,360,40,40);
	box15 = new Box(680,360,40,40);

	box16 = new Box1(640,320,40,40);

	var polygon_options = {
		restitution : 0.1,
	  }

	polygon = Bodies.circle(100, 450, 20,polygon_options);
	
	World.add(world,polygon);
	slingShot = new SlingShot(this.polygon,{x:100,y:450});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("brown");
  ground1.display()
  ground.display()
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  
  box13.display();
  box14.display();
  box15.display();
  
  box16.display();

  imageMode(CENTER)
  image(polygonImg,polygon.position.x,polygon.position.y,60,60)
   
}


function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly()
}
  
