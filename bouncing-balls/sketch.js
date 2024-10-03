//bouncing balls Demo
// yedidiah
// oct 3, 2024
let ballArray = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

let theBall = {
  x: 200,
  y: 300,
  raduis: 50,
  dx:3,
  dy:2,
};


function draw() {
  background(220);

  //move ball
  theBall.x += theBall.dx;
  theBall.y += theBall.dy;

  //bounce if needed
  if(theBall.x > width - theBall.raduis || theBall.x <0 + theBall.raduis){
    theBall.dx *= -1;
  }
  if(theBall.y > height - theBall.raduis || theBall.y <0 + theBall.raduis){
    theBall.dy *=-1;
  }
  //show the ball
  circle(theBall.x, theBall.y, theBall.raduis * 2);
}

function spawnBall(){
  let theBall = {
    x: theX,
    y: theY,
    raduis: random(30, 60),
    dx:random(-5, 5),
    dy:random(-5, 5),
  };
}
