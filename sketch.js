const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
var engine, world;
var trash;
var ground;
var cat;
var block1, block2, block3;
var trashimg;
var trashcanimg;

function preload(){
    trashimg = loadImage("paper.png");
    trashcanimg = loadImage("dustbingreen.png");
}

function setup() {
    createCanvas(1250,670);
    engine = Engine.create();
    world = engine.world;
    rectMode(CENTER);
    ground = Bodies.rectangle(625, 670, 1250,20,{isStatic: true});
    World.add(world, ground);
    console.log(trash);
    trash = Bodies.circle(200,630,25, {isStatic: false, friction: 0.03});
    trash.image = loadImage("paper.png");
    World.add(world, trash);
    block1 = new trashCan(900,580,10,PI/2);
    block2 = new trashCan(975,652.5,10,PI/1);
    block3 = new trashCan(1050,580,10,PI/2);
    imageMode(CENTER);
    image(trashimg, trash.position.x, trash.position.y);
    
}

function throwTrash(){
    Body.applyForce(trash, {x: trash.position.x , y: trash.position.y}, {x:0.097, y:-0.11});
    }


function draw() {
    background(255);
    Engine.update(engine);
    block2.display();
    block1.display();
    block3.display();
    fill(255);
    rect(ground.position.x, ground.position.y, 1250,20);
    image(trashimg, trash.position.x, trash.position.y, 70,70);
    image(trashcanimg, 975, 570, 190, 180);
}

