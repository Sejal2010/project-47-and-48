var stone,frog,bg;
var si,fi,bi;
var ground;
var stoneG

function preload(){
 si=loadImage("./imgs/stone.png");
 fi=loadImage("./imgs/frog.png");
 bi=loadImage("./imgs/forest.png");
} 

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  bg=createSprite(windowWidth-200, windowHeight-80, windowWidth+4000, 100000);
  bg.addImage(bi);
  bg.scale=0.99

  ground=createSprite(800,590,10000,100);
  ground.shapeColor="green"

  frog=createSprite(200,500,50,50);
  frog.addImage(fi);
  frog.scale=0.25;

  stoneG=new Group();
}

function draw() {
  background("black");
  stones();
  
  if (keyDown("s")){
    frog.velocityY=-10;
  }
  frog.velocityY=frog.velocityY+0.5;
  drawSprites();
  if(keyDown("space")){
    bg.velocityX=-2
   
  }
  if(bg.x<200){
    bg.x=500
  }
  frog.collide(ground);
  if(frog.isTouching(stoneG)){
    fill("white")
    textSize(100)
    text("Game Over",windowWidth/2-200,windowHeight/2-200)
    frog.visible=false;
    bg.velocityX=0;
    stoneG.setVelocityXEach(0);
  }
}

function stones(){
  if(frameCount%100===0){
    stone = createSprite(random(1000,5000),500);
    stone.addImage(si);
    stone.scale=0.25;
    stone.velocityX=-3;
    stoneG.add(stone);
  }
  }