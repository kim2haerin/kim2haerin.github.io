// Rectangle Grid
// 2D Array Demo

const CELL_SIZE = 100;
let grid;
let rows;
let cols;
let ice, rock, fire, flash, forest, air, backgroundImage;

function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(600, 600);
  cols = Math.floor(width/CELL_SIZE);
  rows = Math.floor(height/CELL_SIZE);
  grid = generateRandomGrid(cols, rows);
}

function preload(){
  air = loadImage("block_air_jelly.png");
  backgroundImage = loadImage("background_land.png");
  rock = loadImage("block_earth_jelly.png");
  fire = loadImage("block_fire_jelly.png");
  flash = loadImage("block_flash_jelly.png");
  forest = loadImage("block_forest_jelly.png");
  ice = loadImage("block_ice_jelly.png");
}

function draw() {
  background(220);
  //imageMode(CENTER);
  //image(backgroundImage, width/2, height/2, width, height);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        //fill("lightblue");
        image(random(air, rock, fire, flash, forest, ice),x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
      }
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        newGrid[y].push(0);
      }
    }
  }
  return newGrid;
}