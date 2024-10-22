//yedidiah houngbo
//piano tile game

let w = 0;
let h = 0;
let s = 'play';
let score = 0;
let bgMusic;
let tileInterval = 1000; 
//Adjust this based on your song's tempo
let lastTileTime = 0;
let gameOver = false;

function preload() {
  bgMusic = loadSound("sound.mp3");
}

class Tile {
  constructor(lane) {
    this.lane = lane;
    this.w = w / 4 - 20;
    this.h =  h / 5;
    this.x = 10 + this.lane * w / 4;
    this.y = -2 * this.h;
    this.speed = 6;
  }

  show() {
    push();
    fill(255);
    translate(this.x, this.y);
    rectMode(CENTER);
    rect(this.w / 2, this.h / 2, this.w, this.h);
    pop();
  }

  move() {
    this.y += this.speed;
  }

  arrive() {
    return this.y > -this.h + 5;
  }

  missed() {
    return this.y > 9 * this.h / 2;
  }

  touched(x, y) {
    return x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.h;
  }
}

let tiles = [];

function setup() {
  createCanvas(400, 450);
  w = width;
  h = height;
  //bgMusic.loop(); // Start playing music when the game starts
}

function draw() {
  frameRate(30);
  background(20);

  stroke(255);
  line(w / 4, 0, w / 4, h);
  line(2 * w / 4, 0, 2 * w / 4, h);
  line(3 * w / 4, 0, 3 * w / 4, h);
  line(0, 4 * h / 5, w, 4 * h / 5);

  let currentTime = millis();

  // Check if it's time to create a new tile
  if (currentTime - lastTileTime > tileInterval && !gameOver) {
    tiles.push(new Tile(int(random(4))));
    lastTileTime = currentTime;
  }

  if (tiles.length > 0) {
    if (tiles[0].missed()) {
      gameOver = true;
    }
  }

  for (let tile of tiles) {
    if (!gameOver) {
      tile.move();
    }
    tile.show();
  }

  textSize(32);
  textAlign(CENTER);
  fill(255);
  stroke(0);
  text(s, w / 2, 32);
  text(score, w / 2, 64);
  
  if (gameOver) {
    background(0);
    text('Good job, you did your best', w / 2, h / 2);
    text('Score: ' + score, w / 2, h / 2 + 50);
    bgMusic.stop();
  }
}

function restartGame() {
  score = 0;
  tiles = [];
  gameOver = false;
  lastTileTime = 0; // Reset the last tile time
  bgMusic.loop(); // Restart music if needed
}

function mousePressed() {
  if (gameOver) {
    restartGame();
  } 
  else if (tiles.length > 0 && tiles[0].touched(mouseX, mouseY)) {
    if (s === 'play') {
      bgMusic.loop();
      s = 'playing';
    }
    score += 5;
    tiles.splice(0, 1);
  } 
  else {
    gameOver = true;
  }
}