var seaImg, shipAnimation;
var sea, ship;

function preload() {
  seaImg = loadImage("sea.png");
  shipAnimation = loadAnimation(
    "ship-1.png",
    "ship-2.png",
    "ship-3.png",
    "ship-4.png",
    "ship-1.png"
  );
}

function setup() {
  createCanvas(800, 400);

  sea = createSprite(200, 200);
  sea.addImage(seaImg);
  sea.scale = 0.5;
  sea.x = width / 2;

  ship = createSprite(350, 200);
  ship.addAnimation("moving", shipAnimation);
  ship.scale = 0.4;
}

function draw() {
  background("blue");

  sea.velocityX = -2;

  console.log(sea.x);

  if (sea.x < 0) {
    sea.x = width / 2;
  }

  drawSprites();
}
