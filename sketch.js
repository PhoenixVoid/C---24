const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var log1,bird,pig1,ground;
var box3, box4, box5;
var pig2, log2;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(720,350,80,80);
    box2 = new Box(900,350,80,80);
    box3 = new Box(720, 240, 80, 80);
    box4 = new Box(900, 240, 80,80);
    box5 = new Box(810, 160, 80, 80);
    
    pig1 = new Pig(810, 350);
    pig2 = new Pig(810, 240);

    log1 = new Log(810, 310, 300, PI/2);
    log2 = new Log(810, 200, 300, PI/2);
    log3 = new Log(770, 150, 200, PI/5)
    log4 = new Log(845, 150, 200, -PI/5);

    bird = new Bird(300, 200)

    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
   
    box1.display();
    box2.display();

    ground.display();

    pig1.display();
    pig2.display();

    log1.display();

    box3.display();
    box4.display();

    log2.display();
    log3.display();
    log4.display();

    box5.display();

    bird.display();
}