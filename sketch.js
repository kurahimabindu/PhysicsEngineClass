const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var ShauryaEngine,ShauryaWorld

var ground

function setup() {
  createCanvas(400,400);

  ShauryaEngine=Engine.create()
  ShauryaWorld=ShauryaEngine.world

  var options={
    isStatic:true
  }

  ground=Bodies.rectangle(200,380,400,20,options)
  World.add(ShauryaWorld,ground)

  console.log(ground)

  

  
}

function draw() {
  background("black");  
  Engine.update(ShauryaEngine)
  rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,20)
  
}