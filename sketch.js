let img;

function preload() {
  img = loadImage("assets/images/exit_8_game_image.jpg");
}

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}

function draw() {
  background(200);

  let imgX = width / 2;
  let imgY = height / 2;

  imageMode(CENTER);

  // Draw image safely sized
  if (img) {
    image(img, imgX, imgY, 400, 300);
  } else {
    fill(0);
    text("Image not loaded", width/2, height/2);
  }

  let rectWidth = 180;
  let rectHeight = 40;
  let spacing = 70;

  fill(0);
  noStroke();

  rect(imgX, imgY - spacing / 2, rectWidth, rectHeight);
  rect(imgX, imgY + spacing / 2, rectWidth, rectHeight);

  fill(255);
  textSize(16);

  text("start", imgX, imgY - spacing / 2);
  text("instructions", imgX, imgY + spacing / 2);
}