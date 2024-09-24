// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//let spongebob;

//function preload() {
 //   spongebob = loadImage("bob.webp")
//}
//function setup() {
 //   createCanvas(windowWidth, windowHeight);
 // }
  
 // function draw() {
  //  background(220);
  
   // image(spongebob, mouseX, mouseY);
  //}

  //player
let y = 390;
let x = 50;
//let dx = 400;
//let dy = 375;
let pWidth = 30;
let pHeight = 70
let r = 0;
let g =255;
let b = 255;
let radius = 30;

//box
let boxX = 200;
let boxY = 300;
let bWidth = 200;
let bHeight = 40;

//game control

let stage = 0;

function setup() {
  background(100)
  createCanvas(800, 500);
  rectMode(CENTER);
  textAlign(CENTER);
  
  x = -1;
  speed = 3;
   
    if(stage===0){
      game();
    } 
}

function draw() { 
  
  ellipse(x, y, 30);
  fill(r, g, b)
  moveBall();
  bounceBall();
  displayBall();
}
function moveBall() {
  //move
  x = x + speed;
}

function bounceBall() {
  //bounce if needed
  while(keyIsPressed===true){
  if (x >= width - radius || x <= 0 + radius) {
    x = x * -1;
    pickRandomColor();   
  }
}
}

function displayBall() {
  //display
//  fill(r, g, b);
//  circle(x, y, radius * 2);
}

function game(){
  background(150, 230, 240)
  noStroke();
  fill(100, 200, 75);
  rect(width/2, 450, width, 100); 
  
  // window frame
  noFill();
  stroke(0);
  strokeWeight(15);
  rect(width/2, height/2, width, height);
  
//draw box
  stroke(0);
  strokeWeight(5);
  fill(205, 100, 0);
  rect(boxX, boxY, bWidth, bHeight);
}

