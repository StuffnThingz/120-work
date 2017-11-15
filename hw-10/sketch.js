var x = [1538, 734, 10];


// set up canvas
function setup() {
createCanvas (windowWidth, windowHeight);
frameRate(5); // slow down framerate so you can see colors clearly.
}
// setup canvas and stroke/ color for lines.
function draw() {
background('#FFF771');
strokeWeight(5);
stroke('#FF803A');
// make a 4x4 panel
panel();
circles();
}

// making NEW function for ellipses
// making a ellipse in every panel that randomly changes color.
// using keyISPressed to turn off flashing circles.
function circles() {
  if(keyIsPressed === false){
  for(var_x = width/4; var_x < width; var_x += width/2) {
    for(var_y = height/4; var_y < height; var_y += height/2) {
      noStroke();
      fill(random(255), random(255), random(255));
      ellipse(var_x, var_y, x[0]/2 - x[2], x[1]/2 - 10);
      }
    }
  }
}
// making NEW function for the panels
function panel() {
  for(line_x = 0; line_x <= width; line_x += width/2) {
    for(line_y = 0; line_y <= height; line_y += height/2) {
      line(line_x, 0, line_x, width);
      line(line_x, line_y, width, line_y);
}
}
}
