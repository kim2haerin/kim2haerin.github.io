// Grid Based Game
// Yedidiah
// Date


const CELL_SIZE = 100;
let grid;
let rows;
let cols;

//the elements
let air;
let earth;
let fire;
let flash;
let forest;
let ice;
let water;

function preload() {
  air = loadImage("block_air_jelly.png");
  earth = loadImage("block_earth_jelly.png");
  fire = loadImage("block_fire_jelly.png");
  flash = loadImage("block_flash_jelly.png");
  forest = loadImage("block_forest_jelly.png");
  ice = loadImage("block_ice_jelly.png");
  water = loadImage("block_water_jelly.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(width/CELL_SIZE);
  rows = Math.floor(height/CELL_SIZE);
  grid = generateRandomGrid(cols, rows);
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
    if (grid[y][x] === OPEN_TILE) {
      grid[y][x] = IMPASSIBLE;
    }
    else if (grid[y][x] === IMPASSIBLE) {
      grid[y][x] = OPEN_TILE;
    }
  }
}

function draw() {
  background("white");
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 1) {
        fill(99, 130, 214);
      }
      //else if (grid[y][x] === 0) {
      //fill("white");
      //}
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      //toss in a 0 or 1 randomly
      if (random(100) < 50) {
        newGrid[y].push(0);
      }
      else {
        newGrid[y].push(1);
      }
    }
  }
  return newGrid;
}
