// Walker OOP

class Walker{
  constructor(x, y, theColor){
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.color = theColor;
    this.radius = 5;
  }

  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
  }
  move(){
    let choice = random(100);
    if(choice < 25){
      //up
      this.y -= this.speed;
    }
    else if (choice < 50){
      //down
      this.y += this.speed;
    }
    else if (choice < 75){
      //left
      this.x -= this.speed;
    }
    else{
      this.x  += this.speed;
    }
  }
}

let winston;
let radia;

function setup() {
  createCanvas(windowWidth, windowHeight);
  winston = new Walker(width/2, height/2, "red");
  winston = new Walker(200, 300, "blue");
}

function draw() {
  winston.move();
  winston.display();

  radia.move();
  radia.display();
}
