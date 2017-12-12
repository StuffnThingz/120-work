let ball = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 23; i++) {
      ball[i] = new Ball();
    }
}

function draw() {
  background('rgb(51, 0, 255)')
    for (let i = ball.length - 1; i >= 0; i--) {
      ball[i].show();
      ball[i].move();
     for (let j = ball.length - 1; j >= 0; j--) {
       if (i != j && ball[i].intersects(ball[j])) {
         ball.splice(i, 1);
         ball.splice(j, 1);
      }
    }
  }
}
