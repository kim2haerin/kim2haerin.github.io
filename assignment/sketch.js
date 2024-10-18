// array and object assignment
// Yedidiah Houngbo


let w = 0;
let h = 0;
let s = 'play';
let score =  0;
let bgMusic;

let gameOver = false;

function preload() {
  bgMusic = loadSound("background-music.mp3");
}

class tile{
  constructor(lane){
    this.lane = lane;
    this.w = w/4-20;
    this.h = h/5;
    this.x = 10 + this.lane*w/4;
    this.y = -2 * this.h;
    this.speed = 6;
  }
  show(){
    push();
    fill(255);
    translate(this.x,this.y);
    rectMode(CENTER);
    rect(this.w/2, this.h/2, this.w, this.h);
    
    pop();
  }
  move(){
    this.y +=this.speed;
  }
  arrive(){
    return this.y > - this.h + 5;
  }
  missed(){
    return this.y>9 * this.h /2;
  }
  
  touched(x, y){
    return x> this.x && x< this.x + this.w && y> this.y && y < this.y + this.h;
  }
}

tiles=[];

function setup() {
  createCanvas(400, 450);
  w = width;
  h = height;
  tiles.push(new tile(int(random(4))));
}

function draw() {
  frameRate(30);
  background(20);
  
  stroke(255);
  line(w/4, 0, w/4, h);
  line(2*w/4, 0, 2*w/4, h);
  line(3*w/4, 0, 3*w/4, h);
  line(0, 4*h/5, w, 4*h/5);
 
  if(tiles [tiles.length-1] .arrive()){
    tiles.push(new tile(int(random(4))));
  }
  
  if(tiles[0].missed()){
    gameOver = true;
  }
  
  for(let tile of tiles){
    if(!gameOver){
      tile.move();
    }
    tile.show();
  }
  textSize(32);
  textAlign(CENTER);
  fill(255);
  stroke(0);
  text(s,w/2, 32);
  text(score, w/2, 64);
  if (gameOver === true){
    background(0);
    text('good job, you did your best',w/2, h/2);
    text('score:' + score, w/2, h/2+50);
  }
}

function mousePressed(){
  if(tiles[0].touched(mouseX, mouseY)){
    score+=5;
    tiles.splice(0,1);
  }
  else{ 
    return gameOver = true;
  }
  if (!bgMusic.isPlaying()) {
    bgMusic.loop();
  }
}
