// Translate/Rotate demo

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(220);

  push();
  translate(200, 200);
  fill("pink");
  rotate(mouseX);
  square(0, 0, 50);
  pop();

  fill("green");
  rect(width/2, 400, width, 200);
}
