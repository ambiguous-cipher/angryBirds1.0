const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//hi wassup

var engine, world;
var box1, ground;
var box2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new GroundObject(400, 400, 10000, 20);
    box1 = new Box(850,300,60,60);
    box2 = new Box(1000,300,60,60);
    pig1 = new Pig(925,300);
    log1 = new Log(925,250, 10, 225, PI/2);
    
    box3 = new Box(850,200,60,60);
    box4 = new Box(1000,200,60,60);
    pig2 = new Pig(925,200);
    log2 = new Log(925,150, 10, 225, PI/2);

    box5 = new Box(925,100,60,60);
    log3 = new Log(875,0,10,150, PI/6);
    log4 = new Log(975,0,10,150, -PI/6);
    bird = new Bird(200, 200);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();
    bird.display();
    /*if (keyCode == DOWN_ARROW){
        boxIncubator();
    }*/
}

/*function boxIncubator(){
    var box;
    box = new Box(random(100, 300), random(0, 200), random(10, 80), random(10, 80));
    
    box.display()
}*/