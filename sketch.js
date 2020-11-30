var PLAY=1;
var END=0;
var gameState=PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}
function setup() {
  createCanvas(600, 200);

  monkey= createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);

  monkey.scale = 0.1;
  
  ground = createSprite(800,195,1600,10);
  
  ground.x = ground.width /2;
  
 bananaGroup=new Group();
  obstacleGroup=new Group();

  
}

function draw() {
  background("lightBlue");
  textSize(30)
  fill("gray")
 score=Math.ceil(frameCount/frameRate())
  text("score"+score,500,50)
  console.log(monkey.y)
  if(gameState===PLAY){
      ground.velocityX = -4
    
  if (ground.x < 0){
    ground.x = ground.width/2;
  }

     if(keyDown("space")&& monkey.y >= 130) {
    monkey.velocityY = -10;
      
  }
  
  monkey.velocityY =monkey.velocityY + 0.5
    
    

    //spawn the clouds
  spawnBanana();
  happyObstacle();
    if(obstacleGroup.isTouching(monkey)){
       gameState=END
  
       }
     }
  else
    if(gameState===END){
       ground.velocityX=0
      obstacleGroup.setVelocityXEach(0)
       bananaGroup.setVelocityXEach(0)
         obstacleGroup.setLifetimeEach(-2)
        bananaGroup.setLifetimeEach(-2)
     
       monkey.velocityY=0;
      
    
       }
  
  
 monkey.collide(ground);
  
  drawSprites();
}

function spawnBanana() {
  if (frameCount % 60 === 0) {
     banana = createSprite(600,100,40,10);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(30,60))
    banana.scale = 0.1;
   banana.velocityX = -3;
    
    
    //assigning lifetime to the variable
     banana.lifetime = 200
 
     bananaGroup.add( banana)
    }
}
function happyObstacle(){
  if (frameCount % 60 === 0) {
    obstacle = createSprite(600,170,10,40);
   obstacle.addImage(obstacleImage)
    obstacle.scale = 0.1;
    obstacle.velocityX = -6
    obstacleGroup.add(obstacle)
  
    //assigning lifetime to the variable
    obstacle.lifetime = 100
   
}
    
}




