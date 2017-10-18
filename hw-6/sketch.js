var circle = {};
  circle.pos_x = 768;
  circle.pos_y = 367;
  circle.size = 100;

var col = {
  r: 255,
  g: 0,
  b: 255
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('rgb(49, 50, 49)');
  frameRate(15);

}

function draw() {
    circle.pos_x = random(0, width);
    circle.pos_y = random(0, height);
    col = map(mouseX, 0, windowWidth, 0, 255);
    fill(col, 0, 0, random(100, 255));
    noStroke();
    ellipse(circle.pos_x, circle.pos_y, random(10, circle.size));

}
