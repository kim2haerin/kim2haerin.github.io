//Yedidiah Houngbo
//candy crush game

let grid;
let cellSize;
const GRID_SIZE = 10; // 10x10 grid
const ICE = 0;
const FOREST = 1;
const FIRE = 2;
const FLASH = 3;
const AIR = 4;
const ROCK = 5;
let elements = ["rock", "fire", "flash", "ice", "water", "air", "forest"];
// offset to move grid horizontally
let offsetX = 0; 
// offset to move grid vertically
let offsetY = 0;  
// flag to check if the mouse is being dragged
let dragging = false;  
// previous mouse positions for drag calculation
let lastX, lastY;  
// Store the selected cell for swapping
let selectedCell = null;  
let matchFound = false;

function preload(){
  // Load images for elements (or blocks)
  fire = loadImage("images/fire.png");
  forest = loadImage("images/forest.png");
  ice = loadImage("images/ice.png");
  flash = loadImage("images/flash.png");
  rock = loadImage("images/earth.png");
  water = loadImage("images/water.png");
  air = loadImage("images/air.png");
}

function setup() {
  createCanvas(windowWidth * 0.6, windowWidth * 0.6);
  cellSize = height / GRID_SIZE;
  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
}

function windowResized() {
  resizeCanvas(windowWidth * 0.6, windowWidth * 0.6);
  cellSize = height / GRID_SIZE;
}

function draw() {
  translate(offsetX, offsetY);
  
  displayGrid();
  if (matchFound) {
    // Check if there's a match every frame
    findMatches(); 
  }
}

function mousePressed() {
  let x = Math.floor((mouseX - offsetX) / cellSize);
  let y = Math.floor((mouseY - offsetY) / cellSize);

  if (selectedCell === null) {
    // Select the first cell
    selectedCell = {x, y}; 
  } 
  else {
    if (isAdjacent(x, y, selectedCell.x, selectedCell.y)) {
      swapCells(selectedCell.x, selectedCell.y, x, y);
      // Reset the selection
      selectedCell = null; 
    } 
    else {
      // New selection if not adjacent
      selectedCell = {x, y}; 
    }
  }
}

function mouseReleased() {
  // Handle dragging if necessary
}

function isAdjacent(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) === 1 && y1 === y2 || Math.abs(y1 - y2) === 1 && x1 === x2;
}

function swapCells(x1, y1, x2, y2) {
  // Swap elements in grid
  let temp = grid[y1][x1];
  grid[y1][x1] = grid[y2][x2];
  grid[y2][x2] = temp;
  // Trigger match checking after swapping
  matchFound = true; 
}

function findMatches() {
  let matches = [];
  
  // Horizontal matches
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE - 2; x++) {
      let val = grid[y][x];
      if (val !== ICE && val === grid[y][x + 1] && val === grid[y][x + 2]) {
        matches.push({type: 'horizontal', x, y});
      }
    }
  }

  // Vertical matches
  for (let x = 0; x < GRID_SIZE; x++) {
    for (let y = 0; y < GRID_SIZE - 2; y++) {
      let val = grid[y][x];
      if (val !== ICE && val === grid[y + 1][x] && val === grid[y + 2][x]) {
        matches.push({type: 'vertical', x, y});
      }
    }
  }

  // Process matches
  if (matches.length > 0) {
    clearMatches(matches);
    matchFound = false;
  }
}

function clearMatches(matches) {
  for (let match of matches) {
    let { x, y } = match;
    
    // Horizontal match clearing
    if (match.type === 'horizontal') {
      for (let i = 0; i < 3; i++) {
        // Set matched cells to ICE
        grid[y][x + i] = ICE; 
      }
    }
    
    // Vertical match clearing
    if (match.type === 'vertical') {
      for (let i = 0; i < 3; i++) {
        // Set matched cells to ICE
        grid[y + i][x] = ICE; 
      }
    }
  }
  
  applyGravity();
}

function applyGravity() {
  // Apply gravity to make elements fall down
  for (let x = 0; x < GRID_SIZE; x++) {
    for (let y = GRID_SIZE - 1; y >= 0; y--) {
      if (grid[y][x] === ICE) {
        let emptyY = y;
        
        // Find the first non-empty cell above
        for (let newY = y - 1; newY >= 0; newY--) {
          if (grid[newY][x] !== ICE) {
            // Drop the element down
            grid[emptyY][x] = grid[newY][x];
            // Set the original position to ICE
            grid[newY][x] = ICE; 
            break;
          }
        }
      }
    }
  }
  refillGrid();
}

function refillGrid() {
  // Refill empty spaces with random elements
  for (let x = 0; x < GRID_SIZE; x++) {
    for (let y = 0; y < GRID_SIZE; y++) {
      if (grid[y][x] === ICE) {
        // Refill with random element
        grid[y][x] = Math.floor(random(0, elements.length)); 
      }
    }
  }
}

function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      let element = grid[y][x];
      let img = getElementImage(element);
      image(img, x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function getElementImage(element) {
  switch (element) {
  case AIR: return air;
  case ROCK: return rock;
  case ICE: return ice;
  case FOREST: return forest;
  case FIRE: return fire;
  case FLASH: return flash;
  // default case
  default: return ice; 
  }
}

function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      // Randomly select an element
      newGrid[y].push(Math.floor(random(0, elements.length))); 
    }
  }
  return newGrid;
}
