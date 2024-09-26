// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let playerX = 180;
let playerY = 180;

let playerX1 = 50;
let playerY1= 180;

let side1;
let front1;

let side2;
let front2;


//box
let boxX = 200;
let boxY = 300;
let bWidth = 200;
let bHeight = 40;

function setup() {
  createCanvas(400, 400);
  side1=true;
  front1=true;
  
  side2=true;
  front2=true;
}


function draw() {
  background(135, 206, 235);
  text(mouseX, 200, 30);
  text(mouseY, 260, 30); 
  
  //Ground
  noStroke();
  fill(0, 128, 0);
  rect(0, 200, width, height / 2);


  //character1
  
  if(side1 === true){
  //side
    fill(240, 230, 140);
    ellipse(playerX, playerY, 30, 30);

    fill(0, 255, 255);
    rect(playerX - 15, playerY, 30, 30);

    //wheel
    fill(0);
    ellipse(playerX, playerY + 30, 15, 15);
    fill(255);
    ellipse(playerX, playerY + 30, 8, 8);

  }
  else if(front1 ===true){
  //front
    fill(240, 230, 140);
    ellipse(playerX, playerY, 30, 30);

    fill(0, 255, 255);
    rect(playerX - 15, playerY, 30, 30);

    //wheel
    fill(0);
    ellipse(playerX-14, playerY + 30, 8, 15);
    ellipse(playerX+14, playerY + 30, 8, 15);
  }
  
  //character2
   
  if(side2 === true){
  //side
    fill(140, 130, 140);
    ellipse(playerX1, playerY1, 30, 30);

    fill(255, 0, 255);
    rect(playerX1 - 15, playerY1, 30, 30);

    //wheel
    fill(0);
    ellipse(playerX1, playerY1 + 30, 15, 15);
    fill(255);
    ellipse(playerX1, playerY1 + 30, 8, 8);

  }
  else if(front2 ===true){
  //front
    fill(140, 130, 140);
    ellipse(playerX1, playerY1, 30, 30);

    fill(255, 0, 255);
    rect(playerX1 - 15, playerY1, 30, 30);

    //wheel
    fill(0);
    ellipse(playerX1-14, playerY1 + 30, 8, 15);
    ellipse(playerX1+14, playerY1+ 30, 8, 15);
  }
  
  function game(){
    background(255);
    stroke(51);
    square(20, 20, 60);
    noStroke();
    fill(100, 0, 75);
    rect(width/2, 450, width, 100); 
  
    // window frame
    noFill();
    stroke(0);
    strokeWeight(15);
    rect(width/2, height/2, width, height);
  
    //draw box
    stroke(0);
    strokeWeight(5);
    fill(206, 100, 0);
    rect(boxX, boxY, bWidth, bHeight);
  }
  
  
  if(dist(playerX,playerY,playerX1,playerY1)<30){
  
    textSize(20);
    text("TAG",130,100);
  }
  
  function frame(){
    noFill();
    stroke(0);
    strokeWeight(15);
    //rect(width/2, height/2, width, height);
    square(400, 400, 800);
  } 
  
}

function keyPressed() {

  if (keyCode === RIGHT_ARROW) {
    playerX += 10;
    side1=true;

  }

  if (keyCode === LEFT_ARROW) {
    playerX -= 10;
    side1=true;
  }

  if (keyCode === UP_ARROW) {
    playerY -= 10;
    side1=false;
    front1=true;

  }

  if (keyCode === DOWN_ARROW) {
    playerY += 10;
    side1=false;
    front1=true;

  }
  
  //character2
  //D
  if (keyCode === 68) {
    playerX1 += 10;
    side2=true;

  }
  //A
  if (keyCode === 65) {
    playerX1 -= 10;
    side2=true;
  }
  //w
  if (keyCode === 87) {
    playerY1 -= 10;
    side2=false;
    front2=true;

  }
  //s
  if (keyCode === 83) {
    playerY1 += 10;
    side2=false;
    front2=true;

  }
}