// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let waitTime= 2000;
let lastTime= 0;
let isColor = true;


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  //if(millis()> lastTime + waitTime){
  if(color =="red"){  
  fill("red");
  ellipse(width/2, height/2 - 65, 50, 50); //top
  "green" =!"green";
  "orange" =!"orange";  
}
  fill("orange")
  ellipse(width/2, height/2, 50, 50); //middle
  fill("green")
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
  //pickColor();

//function isColor(){
  //color = random("red", "green", "orange");
  //if (color =="red"){
   // "green" =!"green";
   // "orange" =!"orange";  
 //}
  //else if(color ==="green"){
   // red=!red;
  //  "orange"=!"orange";
  //}
 // else if(color ==="orange"){
  //  "red"=!"red";
  //  "green"=!"green";
//  }
//}
}
