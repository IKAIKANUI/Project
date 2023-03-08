var Player
function preload() {
  

}

function setup() {
  createCanvas(1400, 800);
  Player=createSprite(100,100,10,10);
}

function draw() {
background("black");




if(keyDown("a")){
Player.velocityX=-5
Player.velocityY=0
};

if(keyDown("d")){
  Player.velocityX=5
  Player.velocityY=0
  };

  if(keyDown("w")){
    Player.velocityY=-5
    Player.velocityX=0
    };

    if(keyDown("s")){
      Player.velocityY=5
      Player.velocityX=0
      };

      drawSprites();
};