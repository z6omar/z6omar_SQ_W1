// image, background colour, text atleast, shape . has to be jenga or exit 8. make sure to cite the image, hiuman descions with ss, upload the process file as a pdf with repo and live link look at guide line .

let img;

function preload() {
  img = loadImage('exit_8_game_image.jpg');
}

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}

function draw() {
  // Light grey background
  background(200);

  // Draw image in center
  let imgX = width / 2;
  let imgY = height / 2;
  imageMode(CENTER);
  image(img, imgX, imgY);

  // Rectangle settings
  let rectWidth = 180;
  let rectHeight = 40;
  let spacing = 60;

  fill(0); // black rectangles
  noStroke();

  // Start button rectangle
  rect(imgX, imgY - spacing / 2, rectWidth, rectHeight);

  // Instructions button rectangle
  rect(imgX, imgY + spacing / 2, rectWidth, rectHeight);

  // White text
  fill(255);
  textSize(16);

  text("start", imgX, imgY - spacing / 2);
  text("instructions", imgX, imgY + spacing / 2);
}
``