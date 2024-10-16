// sound effect demo
// Your Name

let bgMusic;
function preload(){
  bgMusic = loadSound("Heroic Demise (New).mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

function mousePressed(){
  if(!bgMusic.isplaying()){
    bgMusic.loop();
  }
}
