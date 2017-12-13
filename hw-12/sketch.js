var ball = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < 25; i++) {
      ball[i] = new Ball();
    }
}

function draw() {
  background('rgb(51, 0, 255)')
    for (var i = ball.length - 1; i >= 0; i --) {
      ball[i].move();
      ball[i].show();
     for (var j = ball.length - 1; j >= 0; j --) {
       if (i != j && ball[i].intersects(ball[j])) {
         ball.splice(i, 1);
         ball.splice(j, 1);
       }
     }
    }
}
