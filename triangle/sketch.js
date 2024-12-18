// Project Title
// Your Name

let initialTriangle = [
  {x: 625, y: 50},
  {x:50, y: 700},
  {x: 1200, y: 700}

];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(850);
  sierpinski(initialTriangle, 5);
}

function sierpinski(points, depth){
  triangle(points[0].x, points[0].y,
    points[1].x, points[1].y,
    points[2].x, points[2].y);
  sierpinski(points[0], midpoint(points[0], points[1]),
    midpoint(points[0]), points[2]);

  if(depth>0){
    sierpinski([points[0], midpoint(points[0], points[1]), midpoint(points[0], points[2])], depth-1);

    sierpinski([points[1], midpoint(points[0], points[1]), midpoint(points[0], points[2])], depth-1);

    sierpinski([points[0], midpoint(points[0], points[1]), midpoint(points[0], points[2])], depth-1);

  }
}

function midpoint(point1, point2){
  let x = (point1.x + point2.x)/2;
  let y = (point1.y + point2.y)/2;
  return{x: midX, y: midY};
}