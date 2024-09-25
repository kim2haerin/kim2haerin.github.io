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
let lightState = "green";
const GREEN_LIGHT_DURABLE = 3000;
const YELLOW_LIGHT_DURABLE = 500;
const RED_LIGHT_DURABLLE = 3500;




function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  displayCorrectLight();
  changeStateIfNeeded();
}

function changeStateIfNeeded(){
  if (lightState === "green" && millis()>
  lastTime + GREEN_LIGHT_DURABLE){
    lightState = "yellow";
    lastTime = millis();
  }
  else if (lightState === "yellow" && millis()>
  lastTime + GREEN_LIGHT_DURABLE){
    lightState = "red";
    lastTime = millis();
  }
  if (lightState === "red" && millis()>
  lastTime + GREEN_LIGHT_DURABLE){
    lightState = "green";
    lastTime = millis();
  }
}

function displayCorrectLight(){
  if(lightState === "green"){
    fill("green");
    ellipse(width/2, height/2 + 65, 50, 50); 
  }
  else if(lightState === "yellow"){
    fill("yellow");
    ellipse(width/2, height/2, 50, 50);
  } 
  else if(lightState === "red"){
    fill("red");
    ellipse(width/2, height/2 - 65, 50, 50); 
  }

}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);
}
