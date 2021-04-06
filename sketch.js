const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var ball;
var string;
var ball2,ball3,ball4,ball5,ball6;


function setup (){
    createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(700,50,700,20);
    ball = new Ball (700,200,80,80);
    ball2 = new Ball (1000,200,80,80);
    ball3 = new Ball (850,200,80,80);
    ball4 = new Ball (550,200,80,80);
    ball5 = new Ball (400,200,80,80);


    string = new String(ball.body,{x:700,y:50});
    string2 = new String(ball2.body,{x:1000,y:50});
    string3 = new String(ball3.body,{x:850,y:50});
    string4 = new String(ball4.body,{x:550,y:50});
    string5 = new String(ball5.body,{x:400,y:50});
}
function draw (){
    background("white");
    Engine.update(engine);
    ground.display();
    ball.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    string.display();
    string2.display();
    string3.display();
    string4.display();
    string5.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball5.body,{x:mouseX,y:mouseY});
}