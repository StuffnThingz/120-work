var circle = {};
  circle.pos_x = 768;
  circle.pos_y = 367;
  circle.size = 100;

var spot = {};
spot.posX = 750;
spot.posY = 350;


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
    push();
    circle.pos_x = random(0, width);
    circle.pos_y = random(0, height);
    col = map(mouseX, 0, windowWidth, 0, 255);
    fill(col, 0, 0, random(100, 255));
    noStroke();
    ellipse(circle.pos_x, circle.pos_y, random(10, circle.size));
    pop();

    push();
    spot.posX = random(0, width);
    spot.posY = random(0, height);
    col = map(mouseX, 0, windowWidth, 0, 255);
    stroke(0, 0, col);
    strokeWeight(10);
    point(spot.posX, spot.posY);
    pop();
}
