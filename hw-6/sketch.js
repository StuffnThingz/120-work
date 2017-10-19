//set values for big circles
var circle = {};
  circle.pos_x = 768;
  circle.pos_y = 367;
  circle.size = 100;

//set values for spots. Not sure if my math worked, but i wanted it to be on -
//just the the left side of the screen.
var spot = {};
spot.posX = windowHeight / 2;
spot.posY = abs(-19)**2;

//set color values
var col = {
  r: 255,
  g: 255,
  b: 255
}
//setup fbackground and framerate
function setup() {
  createCanvas(windowWidth, windowHeight);
  background('rgb(49, 50, 49)');
  frameRate(15);

}

function draw() {
    push();
    //random function for where circles show up
    circle.pos_x = random(0, width);
    circle.pos_y = random(0, height);
    //make colors go from dark to red with mouseX
    col = map(mouseX, 0, windowWidth, 0, 255);
    fill(col, 0, 0, random(100, 255));
    noStroke();
    //make circle size random
    ellipse(circle.pos_x, circle.pos_y, random(10, circle.size));
    pop();

    push();
    //random function for where spots show up
    spot.posX = random(0, width);
    spot.posY = random(0, height);
    //make colors go from dark to green with mouseX
    col = map(mouseX, 0, windowWidth, 0, 255);
    stroke(0, col, 0);
    strokeWeight(5);
    //make spots show up on left side of screen I think.
    point(spot.posX / 2, spot.posY * ceil(.5));
    pop();
}
