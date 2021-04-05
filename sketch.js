const Engine     = Matter.Engine;
const World      = Matter.World;
const Bodies     = Matter.Bodies;
const Constraint = Matter.Constraint;


var bk, bkk;

var borderTop, borderBottom, borderLeft, borderRight;

var engine, world;

var divider1, divider2, divider3, divider4;

var plinko1, plinko3;

var j, k;

var particles = [];



function preeload() {

 // bkk = loadImage("bk.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine         = Engine.create();
  world          = engine.world;
  bk = createSprite(width/2, height/2, 300, 450);
  bk.shapeColor = rgb(18, 58, 102)

 borderBottom = new Ground(width/2, height/2 + 215, 300, 20)

 borderTop = new Divt(width/2, height/2 - 225, 300, 10)

 borderLeft = new Divt(width/2 - 145, height/2 - 12.5, 10, 435)

 borderRight = new Divt(width/2 + 145, height/2 - 12.5, 10, 435)

 divider1 = new Divt(width/2 - 90, height/2 + 130, 10, 150)

 divider2 = new Divt(width/2 - 30, height/2 + 130, 10, 150)

 divider3 = new Divt(width/2 + 30, height/2 + 130, 10, 150)

 divider4 = new Divt(width/2 + 90, height/2 + 130, 10, 150)







}

function draw() {
  background(rgb(189, 91, 41 ));  
  drawSprites();

  text("PLINKO GAME", width/2 - 65, 20, textSize(20), fill("black"))

  text("what is your winning percent??", width/2 - 135, height/2 + 240, textSize(20), fill("black"))
  text("0%-20% |", width/2 - 140, height/2 + 227.5, textSize(11), fill("darkBlue"))
  text("21%-40% |", width/2 - 90, height/2 + 227.5, textSize(11), fill("darkBlue"))
  text("41%-60% |", width/2 - 30, height/2 + 227.5, textSize(11), fill("darkBlue"))
  text("61%-80% |", width/2 + 30, height/2 + 227.5, textSize(11), fill("darkBlue"))
  text("81%-100%", width/2 + 90, height/2 + 227.5, textSize(11), fill("darkBlue"))


  if(frameCount%60 === 0){
    particles.push(new Particles(width/2, height/2 - 225, 10))

  }

  for (var k = 0; k < particles.length; k++){

    particles[k].display();

  }


  for (var j = 520; j <= width/2 + 135; j = j + 37.5){
    plinko1 = new Plinko(j, 120, 15);
    
    plinko1.display();
  }

  for (var j = 530; j <= width/2 + 135; j = j + 50){
    plinko2 = new Plinko(j, 160, 15);
    
    plinko2.display();

  }

  for (var j = 520; j <= width/2 + 135; j = j + 37.5){
    plinko1 = new Plinko(j, 200, 15);
    
    plinko1.display();
  }

  for (var j = 530; j <= width/2 + 135; j = j + 50){
    plinko2 = new Plinko(j, 240, 15);
    
    plinko2.display();

  }

  for (var j = 520; j <= width/2 + 135; j = j + 37.5){
    plinko1 = new Plinko(j, 280, 15);
    
    plinko1.display();
  }





  borderBottom.display();

  borderTop.display();

  borderLeft.display();

  borderRight.display();

  divider1.display();

  divider2.display();

  divider3.display();

  divider4.display();





}