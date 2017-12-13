let ball = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 25; i++) {
      ball[i] = new Ball();
    }
}

function draw() {
  background('rgb(51, 0, 255)')
    for (let i = 0; i < ball.length; i ++) {
      ball[i].move();
      ball[i].show();
     for (let j = 0; j < ball.length; j ++) {
       if (i != j && ball[i].intersects(ball[j])) {
         ball.splice(i, 1);
         ball.splice(j, 1);
       }
     }
    }
}
