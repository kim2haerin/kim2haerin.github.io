// Grid Demo
// Yedidiah Houngbo


//let grid = [[1, 0, 0, 1],
//          [0, 1, 1, 0],
//        [0, 0, 1, 1],
//      [1, 1, 1, 0]];

let cellSize; 
const GRID_SIZE = 10;

function setup() {
  if(windowWidth < windowHeight){
    createCanvas(windowWidth, windowWidth);
  }
  else{
    createCanvas(windowHeight, windowHeight);
  } 

  cellSize = height/GRID_SIZE;
  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
 
}

function draw() {
  background(220);
  displayGrid();
}
function keyPressed(){
  if (key === "r"){
    grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  }
  if (key === "i"){
    grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
  }
}

function displayGrid(){
  for(let y = 0; y < GRID_SIZE; y++){
    for(let x = 0; x < GRID_SIZE; x++){
      if(grid[y][x] === 1){
        fill ("purple");
      }
      else if (grid[y][x]===0){
        fill("red");
      }
      square(x* cellSize, y* cellSize, cellSize);
    }
  }

}

function generateRandomGrid(cols, rows){
  let newGrid = [];
  for(let y = 0; y < rows; y++){
    newGrid.push([]);
    for(let x = 0; x < cols; x++){
      if(random(100)< 50){
        newGrid[y].push(1);
      }
      else{
        newGrid[y].push(0);
      }
    }
  }
  return newGrid;
}

function generateEmptyGrid(cols, rows){
  let newGrid = [];
  for(let y = 0; y < rows; y++){
    newGrid.push([]);
    for(let x = 0; x < cols; x++){
      newGrid[y].push(0);
    }
  }
  return newGrid;
}

function mousePressed(){
  if(grid[y][x] === 0){
    fill ("purple");
  }
  else if (grid[y][x]===1){
    fill("red");
  }
}
