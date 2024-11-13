// Rectangle Grid
// 2D Array Demo

let grid;
let cellSize;
const GRID_SIZE = 10;
const AIR = 0;
const ROCK = 1;
const FIRE = 2;
const FLASH = 3;
const PLAYER = 9;
let thePlayer = {
  x: 0, 
  y: 0,
};
let elements = ["air", "earth","fire","ice"];
let backgroundImage;


function preload(){
  air = loadImage("block_air_jelly.png");
  backgroundImage = loadImage("background_land.png");
  rock = loadImage("block_earth_jelly.png");
  fire = loadImage("block_fire_jelly.png");
  forest = loadImage("block_forest_jelly.png");
  ice = loadImage("block_ice_jelly.png");
}

function setup() {
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth* 0.8, windowWidth* 0.8);
  }
  else {
    createCanvas(windowHeight* 0.8, windowHeight * 0.8);
  }
  cellSize = height/GRID_SIZE;
  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);

  //add player to the grid
  grid[thePlayer.y][thePlayer.x] = PLAYER;
}

function windowResized() {
  if (windowWidth < windowHeight) {
    resizeCanvas(windowWidth, windowWidth);
  }
  else {
    resizeCanvas(windowHeight, windowHeight);
  }
  cellSize = height/GRID_SIZE;
}

function draw() {
  background(220);
  displayGrid();
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  //toggle self
  toggleCell(x, y);
}

function toggleCell(x, y) {
  //make sure the cell you're toggling is in the grid
  if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE) {
    if (grid[y][x] === AIR) {
      grid[y][x] = ROCK;
    }
    else if (grid[y][x] === ROCK) {
      grid[y][x] = AIR;
    }
  }
}

function keyPressed() {
  if (key === "r") {
    grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  }
  if (key === "s") {
    //move down
    movePlayer(thePlayer.x, thePlayer.y + 1);
  }
  if (key === "w") {
    //move up
    movePlayer(thePlayer.x, thePlayer.y - 1);
  }
  if (key === "d") {
    //move right
    movePlayer(thePlayer.x + 1, thePlayer.y);
  }
  if (key === "a") {
    //move left
    movePlayer(thePlayer.x - 1, thePlayer.y);
  }
}

function movePlayer(x, y) {
  //don't move off grid, and only move in open tiles
  if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE && grid[y][x] === AIR) {

    //previous player location
    let oldX = thePlayer.x;
    let oldY = thePlayer.y;
  
    //keeping track of where the player is
    thePlayer.x = x;
    thePlayer.y = y;
  
    //reset the old location to be an empty tile
    grid[oldY][oldX] = AIR;
  
    //put the player into the grid
    grid[thePlayer.y][thePlayer.x] = PLAYER;
  }

}


function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++){
      if (grid[y][x] === AIR) {
        //fill("black");
        image(air, x * cellSize, y * cellSize, cellSize, cellSize);
      }
      else if (grid[y][x] === ROCK) {
        //fill("white");
        image(rock, x * cellSize, y * cellSize, cellSize, cellSize);
      }
      else if (grid[y][x] === FIRE) {
        //fill("white");
        image(fire, x * cellSize, y * cellSize, cellSize, cellSize);
      }
      else if (grid[y][x] === PLAYER) {
        //fill("red");
        image(fire, x * cellSize, y * cellSize, cellSize, cellSize );
        square(x * cellSize, y * cellSize, cellSize);
      }
    }
  }
}


function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      //make it a 1 half the time, a 0 half the time
      let choice = random(100);
      if (choice < 30) {
        newGrid[y].push(ROCK);
      }
      else if (choice < 40) {
        newGrid[y].push(FIRE);
      }
      else {
        newGrid[y].push(AIR);
      }
    }
  }
  return newGrid;
}

function generateEmptyGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(AIR);
    }
  }
  return newGrid;
}