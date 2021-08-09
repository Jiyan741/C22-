const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
let engine;
let world;
var left,right,top,down
var ball
var b1
var b2
var con,con2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  

  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  down=new Ground(200,390,400,20)
  left=new Ground(10,200,20,400)
  right=new Ground(390,200,20,400)
  top=new Ground(200,10,400,20)
  var options={
    restitution:0.8
  }
  ball=Bodies.circle(200,100,20,options)
  World.add(world,ball)

 con=Constraint.create({
   pointA:{x:200,y:10},
   bodyB:ball,
   pointB:{x:0,y:0},
   length:130,
   stiffness:0.2
 })

 World.add(world,con)
}

function draw() 
{
  background(51);
  Engine.update(engine);

  down.show();
  right.show();
  left.show();
  //top.show();
  ellipse(ball.position.x,ball.position.y,20)

  push();
  strokeWeight(2)
  stroke("blue")
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y)
  pop();

}
  function keyPressed(){
    if (keyCode===RIGHT_ARROW) {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
    }
  }


