let ball1;
let ball2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball1 = new Ball();
  ball2 = new Ball();
}

function draw() {
  background('rgb(51, 0, 255)')
   ball1.move();
   ball1.show();
   ball2.move();
   ball2.show();
}
