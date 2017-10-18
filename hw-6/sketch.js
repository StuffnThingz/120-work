var spot = {
  x: 768,
  y: 367
}

var col = {
  r: 255,
  g: 0,
  b: 0
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('rgb(49, 50, 49)');
  frameRate(20);

}

function draw() {
  spot.x = random(0, width);
  spot.y = random(0, width);
  fill(col.r, col.g, col.b, random(100, 255));
  noStroke();
  ellipse(spot.x, spot.y, random(0, 80));

}
