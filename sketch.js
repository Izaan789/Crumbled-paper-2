
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1366, 623);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(340,300,20);
    ground1 = new Ground(650,600,3000,8)
	
	
	edge3 = new Dustbin(840,525,250,PI/2)

	collider1 = new Collider(764,550,233,2000)
}


function draw() {
 background("lightblue");
 Engine.update(engine) 


 
  paper1.display();
  ground1.display();

 edge3.display();


}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.position,{x:0.05,y:-0.05})
	}
}



