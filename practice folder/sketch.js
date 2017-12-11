let ball = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 20; i++) {
      ball[i] = new Ball();
    }
}

function draw() {
  background('rgb(51, 0, 255)')
    for (let i = 0; i < 20; i++) {
      ball[i].move();
      ball[i].show();
    }
}
