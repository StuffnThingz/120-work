var rectangles = [];
var bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 5; i ++) {
    rectangles[i] = new Rectangle(random(width), random(height))
    bubbles[i] = new Bubble(random(width), random(height))
  }
}

function draw() {
  background(0);
  for (var i = 0; i < rectangles.length; i ++) {
    rectangles[i].update();
    rectangles[i].display();
    for (var j = 0; j < rectangles.length; j ++) {
      if (i != j && rectangles[i].intersects(rectangles[j])) {
        rectangles[i].changeColor();
        rectangles[j].changeColor();
      }
    }
  }

  for (var i = 0; i < bubbles.length; i ++) {
    bubbles[i].update();
    bubbles[i].display();
    for (var j = 0; j < bubbles.length; j ++) {
      if (i != j && bubbles[i].intersects(bubbles[j])) {
        bubbles[i].changeColor();
        bubbles[j].changeColor();
      }
    }
  }
}
