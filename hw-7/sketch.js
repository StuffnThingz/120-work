var ball = {};
//change size of circle
ball.width = 75;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;
//use var to set fill color
var col = {
  r: 255,
  g: 255,
  b: 255
};

function setup() {
    // change window height
    createCanvas(windowWidth, windowHeight);
    //changing background color
    background('#FFC989');

}

function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;
    //ball changes directions when it gets to edge
    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }
    //changing stroke and fill depending on location on ball
    stroke('#0066E8');
    fill(col.r, 0, 0, 80);
    if (ball.x > width/2) {
      fill(0, 0, col.b, 80);
      stroke('rgb(255, 0, 0)');
    }
    if (ball.y > height/2) {
    fill(0, col.g, 0, 80);
    stroke('rgb(255, 0, 0)');
    }
    ellipse(ball.x, ball.y, ball.width, ball.width);

}

function mousePressed() {
    //changing what I think is the speed/ size of trail when clicked
    //seems like the "gaps" get bigger the faster is goes.
    ball.scale_x = map(mouseX, 0, width, 1, 20);
    ball.scale_y = map(mouseY, 0, height, 1, 20);

}
