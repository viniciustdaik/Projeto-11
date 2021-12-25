var runner, runner_running;
var ground, ground_image;
var coin, coin_image;
var coin2;
var coin3;
var bomb2;
var bomb3;
var leftcorner;
var rightcorner;
var score = 0;
var bomb, bomb_image;
//var gamestate = "server";
var gamestate = "play";
var gameover, gameover_image;
//var life = 3;
var drink, drink_image;
var bomb_animation;

function preload(){
  //imagens pré-carregadas
  runner_running = loadAnimation("Runner-1.png", "Runner-2.png");
  ground_image = loadImage("path.png");
  coin_image = loadImage("coin.png");
  bomb_image = loadImage("bomb.png");
  gameover_image = loadImage("gameOver.png");
  drink_image = loadImage("energyDrink.png");
  bomb_animation = loadAnimation("bomb.png", "bomb-activated.png", "bomb-activated2.png", "bomb-activated3.png",
   "bomb-activated4.png", "bomb-activated5.png", "bomb-activated6.png");
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  ground = createSprite(200, 200, 100, 100);
  ground.addImage("ground", ground_image);

  runner = createSprite(200, 370, 15, 15);
  runner.addAnimation("running", runner_running);
  runner.scale = 0.04;

  coin = createSprite(200, -20, 5, 5);
  coin.addImage("coin", coin_image);
  coin.scale = 0.4;

  coin2 = createSprite(110, -260, 5, 5);
  coin2.addImage("coin", coin_image);
  coin2.scale = 0.4;
  
  coin3 = createSprite(310, -320, 5, 5);
  coin3.addImage("coin", coin_image);
  coin3.scale = 0.4;

  bomb = createSprite(200, -100, 5, 5);
  bomb.addImage("bomb", bomb_image);
  bomb.scale = 0.08;

  bomb2 = createSprite(100, -290, 5, 5);
  bomb2.addImage("bomb", bomb_image);
  bomb2.scale = 0.08;
  
  bomb3 = createSprite(310, -370, 5, 5);
  bomb3.addImage("bomb", bomb_image);
  bomb3.scale = 0.08;

  leftcorner = createSprite(15, 200, 60, 400);
  rightcorner = createSprite(385, 200, 50, 400);
  gameover = createSprite(200, 50, 5, 5);
  gameover.visible = false;

  drink = createSprite(200, -700, 5, 5);
  drink.addImage("drink", drink_image);
  drink.scale = 0.1;
}

function draw() {
  background('black');
  fill('gold');
  //Text("Pontos: "+score, 375, 20);
  fill('cyan');
  //Text("Clique Para Começar.", 200, 150);
if(ground.y > 400){
  ground.y = height/2;
}
runner.collide(leftcorner);
runner.collide(rightcorner);

if(keyIsDown(LEFT_ARROW)&&gamestate == "play"||keyIsDown("A")&&gamestate == "play"){
  runner.position.x = runner.position.x -3;
}
if(keyIsDown(RIGHT_ARROW)&&gamestate == "play"||keyIsDown("D")&&gamestate == "play"){
  runner.position.x = runner.position.x +3;
}
if(gamestate == "over"){
  gameover.visible = true;
  gameover.addImage("gameover", gameover_image);
}
ground.velocityY = 2;

leftcorner.visible = false;
rightcorner.visible = false;

if(gamestate == "play"){
bomb.velocityY = 5;
coin.velocityY = 3;
coin2.velocityY = 3;
coin3.velocityY = 3;
bomb2.velocityY = 5;
bomb3.velocityY = 5;
drink.velocityY = 8
}else{
  bomb.velocityY = 0;
  coin.velocityY = 0;
  coin2.velocityY = 0;
  coin3.velocityY = 0;
  bomb2.velocityY = 0;
  bomb3.velocityY = 0;
  drink.velocityY = 0;
}
if(coin.y > 425){
  coin.visible = true;
  coin.y = -20;
}
if(drink.y > 425){
  drink.visible = true;
  drink.y = -700;
}
if(coin2.y > 425){
  coin2.visible = true;
  coin2.y = -260;
}
if(coin3.y > 425){
  coin3.visible = true;
  coin3.y = -320;
}
if(bomb.y > 425){
  bomb.visible = true;
  bomb.y = -80
  bomb.addImage("bomb", bomb_image);
}
if(bomb2.y > 425){
  bomb2.visible = true;
  bomb2.y = -290
  bomb2.addImage("bomb", bomb_image);
}
if(bomb3.y > 425){
  bomb3.visible = true;
  bomb3.y = -370
  bomb3.addImage("bomb", bomb_image);
}
if(runner.isTouching(coin)){
  coin.visible = false;
  score = score+5;
}
if(runner.isTouching(coin2)){
  coin2.visible = false;
  score = score+5;
}
if(runner.isTouching(coin3)){
  coin3.visible = false;
  score = score+5;
}
if(runner.isTouching(drink)){
  drink.visible = false;
  score = score+25;
}
if(runner.isTouching(bomb)){
  bomb.visible = false;
  gamestate = "over";
  //bomb.addAnimation("explode", bomb_animation);
  //life = life-1;
}
if(runner.isTouching(bomb2)){
  bomb2.visible = false;
  gamestate = "over";
  //bomb.addAnimation("explode", bomb_animation);
  //life = life-1;
}
if(runner.isTouching(bomb3)){
  bomb3.visible = false;
  gamestate = "over";
  //bomb.addAnimation("explode", bomb_animation);
  //life = life-1;
}
  drawSprites();
}
/*function mousePressed(){
  if(gamestate == "server"){
    gamestate = "play";
  }
}*/

