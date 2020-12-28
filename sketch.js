
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, ground, boy, stone;
var mango1, mango2, mango3, mango4, mango5;
var slingShot;
var mangoBodyPosition, stoneBodyPosition;

function preload()
{
	tree = loadImage("Plucking_mangoes/tree.png");
	boy = loadImage("Plucking_mangoes/boy.png");
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.



	stone = new Stone(350, 650, 50);

	ground = new Ground(600, 790, 1200, 20);

	//mangoes
	mango1 = new Mango(700, 550, 50);
	mango2 = new Mango(830, 530, 50);
	mango3 = new Mango(900, 450, 50);
	mango4 = new Mango(970, 520, 50);
	mango5 = new Mango(1070, 540, 50);

	//slingshot
	slingShot = new Slingshot(stone.body,{x:350, y:650});
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("black");
  
  //Engine.update(engine);

  ground.display();
  image(tree, 600, 400, 600, 400);
  image(boy, 300, 600, 250, 250);
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);

  slingShot.display();

  drawSprites();
 
}

function detectcollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango,body, false);
	}
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }
  
  
function mouseReleased(){
	slingShot.fly();
	//stone.options.is
  }

  function keyPressed(){
	if(keyCode === 32)	{
		Matter.Body.setPosition(stone.body, {x:350, y:650})
		slingShot.attach(stone.body);
	}
}



