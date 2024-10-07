// Terrain generation

let Terrain=[];
const NUMBER_OF_RECT = 2000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let widthOfRect = width/ NUMBER_OF_RECT;
  generateTerrain(widthOfRect);
}

function draw() {
  background(220, 200, 275);
  for(let someRect of Terrain ){
    rect(someRect.x, someRect.y, someRect.w, someRect.h);
  }
}
function generateTerrain(widthOfRect){
  let time = 0;
  let deltaTime = 0.001;
  for(let x = 0; x< width; x += widthOfRect){
    let theHeight = noise(time) * height;
    let someRect = spawRectangle(x, theHeight, widthOfRect);
    Terrain.push(someRect);
    time += deltaTime;
  }
}
function spawRectangle(leftSide, rectHeight, rectWidth){
  let theRect = {
    x: leftSide,
    y: height - rectHeight,
    w: rectWidth,
    h: rectHeight,
  };
  return theRect;
}