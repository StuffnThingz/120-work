let arrows = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  for (let i = 0; i < 20; i++) {
    let x = random(-50, 50 );
  arrows[i] = new Arrow(x, random(10, windowHeight - 10));
}
}

function draw() {
  //arrow
  background(0);
  for (let i = 0; i < arrows.length; i++) {
  arrows[i].move();
  arrows[i].show();
}
}

  class Arrow {
    constructor(x, y) {
      this.x = x;
      this.y = y;
  }

  move() {
    this.x = this.x + 15;
  }

  show() {
    push();
    stroke('red');
    strokeWeight(6);
    line(this.x, this.y, this.x + 175, this.y);
    line(this.x, this.y,this.x - 25, this.y - 25);
    line(this.x, this.y, this.x - 25, this.y + 23);
    line(this.x + 25, this.y, this.x, this.y + 25);
    line(this.x + 25, this.y, this.x, this.y - 25);
    triangle(this.x + 225, this.y, this.x + 175, this.y + 25, this.x + 175, this.y - 25);
    pop();
  }
}
