var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaf, oleaf;
var leafImg, oleafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png");
  leafImg  = loadImage("leaf.png");   
  oleafImg = loadImage("orangeLeaf.png");
}

function setup(){
  createCanvas(400,400);
  
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,2));

  if (frameCount % 80 == 0){
    if(select_sprites == 1){
      createApples()
    }
    else{
      createLeafs()
    }
  }

  drawSprites();
}
function createApples(){
  apple = createSprite (random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.05
  apple.velocityY = 9
  apple.lifetime = 40;
}
function createLeafs(){
  leaf = createSprite (random(50,350),40,10,10);
  leaf.addImage(leaf.png);
  leaf.scale = 0.05
  leaf.velocityY = 9
  leaf.lifetime = 40;
}


