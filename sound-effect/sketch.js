// sound effect demo
// Your Name

let bgMusic;
function preload(){
  bgMusic = loadSound("CRAZY NOISY BIZARRE TOWN (osanime.com).mp3");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  bgMusic.amp(0.3);
}

function draw() {
  background(220);
}

function mousePressed(){
  if(!bgMusic.isplaying()){
    bgMusic.loop();
  }
}
function keyPressed() {
  clickFx.play();
}
