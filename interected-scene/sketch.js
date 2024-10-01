// Chasing game
// Yedidiah Houngbo
// Date
//

let playerX1 = 180;
let playerY1 = 180;

let playerX2 = 50;
let playerY2= 180;

let side1;
let front1;

let side2;
let front2;
let move = 5;

//box
let boxX = 200;
let boxY = 300;
let bWidth = 200;
let bHeight = 40;

function setup() {
  createCanvas(400, 400);
  background(135, 206, 235);
  side1=true;
  front1=true;
  
  side2=true;
  front2=true;
  noStroke();
}

function draw() {
  background(135, 206, 235); 
  
  fill(238, 141, 89);
  text("press d or a", 40, 90);
  text("press s or w", 40, 100);
  fill(220);
  text("two players", 150, 30);
  
  fill(225, 49, 350);
  text("first player:", 200, 70);
  text("press any arrow", 200, 90);

  fill(238, 141, 89 );
  text("second player:", 60, 70);
  
  //Ground
  noStroke();
  fill(0, 128, 0);
  rect(0, 200, width, height / 2);
  
  //frame
  strokeWeight(25);
  noFill();
  stroke(51);
  square(0, 0, 400);
  noStroke();
  
  //creacte window bondaries for player 1
  //right
  if(playerX1 > 380){
    playerX1 = playerX1 - 10;
  }
  
  //left
  if(playerX1 < 25){
    playerX1 = playerX1 + 10;
  }
  
  //bottom
  if(playerY1 > 355){
    playerY1 = playerY1 - 10;
  }
  
  //top
  if(playerY1 < 165){
    
    playerY1 = playerY1 + 10;
  }
  
  //creacte window bondaries for player 2
  //right
  if(playerX2 > 380){
    playerX2 = playerX2 - 10;
  }
  
  //left
  if(playerX2 < 25){
    playerX2 = playerX2 + 10;
  }
  
  //bottom
  if(playerY2 > 355){
    playerY2 = playerY2 - 10;
  }
  
  //top
  if(playerY2 < 165){
    playerY2 = playerY2 + 10;
  }

  //character1
  if(side1 === true){
  //side
    fill(225, 49, 35);
    ellipse(playerX1, playerY1, 30, 30);

    fill(0, 255, 255);
    rect(playerX1 - 15, playerY1, 30, 30);

    //wheel
    fill(0);
    ellipse(playerX1, playerY1 + 30, 15, 15);
    fill(255);
    ellipse(playerX1, playerY1 + 30, 8, 8);

  }
  else if(front1 ===true){
  //front
    fill(225, 49, 35);
    ellipse(playerX1, playerY1, 30, 30);

    fill(0, 255, 255);
    rect(playerX1 - 15, playerY1, 30, 30);

    //wheel
    fill(0);
    ellipse(playerX1-14, playerY1 + 30, 8, 15);
    ellipse(playerX1+14, playerY1 + 30, 8, 15);
  }
  
  //character2
  if(side2 === true){
  //side
    fill(238, 141, 89 );
    ellipse(playerX2, playerY2, 30, 30);

    fill(255, 0, 255);
    rect(playerX2 - 15, playerY2, 30, 30);

    //wheel
    fill(0);
    ellipse(playerX2, playerY2 + 30, 15, 15);
    fill(255);
    ellipse(playerX2, playerY2 + 30, 8, 8);
  }

  else if(front2 ===true){
  //front
    fill(238, 141, 89);
    ellipse(playerX2, playerY2, 30, 30);

    fill(255, 0, 255);
    rect(playerX2 - 15, playerY2, 30, 30);

    //wheel
    fill(0);
    ellipse(playerX2-14, playerY2 + 30, 8, 15);
    ellipse(playerX2+14, playerY2+ 30, 8, 15);
  } 
  
  if(dist(playerX1,playerY1,playerX2,playerY2)<30){
    text("TAG",150,150);
    textSize(20);
  }
 
}

function keyPressed() {

  if (keyCode === RIGHT_ARROW) {
    playerX1 += 10;
    side1=true;
  }

  if (keyCode === LEFT_ARROW) {
    playerX1 -= 10;
    side1=true;
  }

  if (keyCode === UP_ARROW) {
    playerY1 -= 10;
    side1=false;
    front1=true;
  }

  if (keyCode === DOWN_ARROW) {
    playerY1 += 10;
    side1=false;
    front1=true;
  }
  
  //character2
  //press D
  if (keyCode === 68) {
    playerX2 += 10;
    side2=true;
  }
  //press A
  if (keyCode === 65) {
    playerX2 -= 10;
    side2=true;
  }
  //press w
  if (keyCode === 87) {
    playerY2 -= 10;
    side2=false;
    front2=true;
  }
  //press s
  if (keyCode === 83) {
    playerY2 += 10;
    side2=false;
    front2=true;
  }
}