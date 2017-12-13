let ball = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 25; i++) {
      ball[i] = new Ball(random(width), random(height));
    }
}

function draw() {
  background('rgb(51, 0, 255)')

    for (var i = ball.length - 1; i >= 0; i--) {
      ball[i].display();
      ball[i].update();
      ball[i].edgeCheck();
     for (var j = 0; j < ball.length; j++) {
       if (i != j && ball[i].intersects(ball[j])) {
         ball.splice(i, 1);
         ball.splice(j, 1);
      }
    }
  }
}
