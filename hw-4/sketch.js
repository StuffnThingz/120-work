//setup function
//create canvas
function setup() {
  createCanvas(600, 800);
}

function draw() {
  //background
  background( 'rgb(250, 250, 250)' );

  push();
  // move everything to the center of the canvas
  translate(300, 400);

  // ** MAIN BODY **

  push();

  //ellipse(0, 0, 10, 10);
  fill('rgb(140, 138, 138)');
  rect(-100, -175, 200, 300);

  pop();

  // ** BODY END **

  // ** LEGS **

  push();

  // translate for legs
  translate(-100, 125);

  // ** RIGHT LEG

  //ellipse(0, 0, 10, 10);
  fill('rgb(63, 46, 226)');
  rect(0, 0, 90, 200);

  // ** LEFT LEG

  // translate for left leg
  translate(110, 0);
  rect(0, 0, 90, 200);

  pop();

  // ** END LEGS **

  // ** FEET **

  push();

  // ** RIGHT FOOT

  // translate for right foot
  translate(-150, 325);
  //ellipse(0, 0, 10, 10);
  rect(0, 0, 140, 60);

  // ** LEFT FOOT

  // translate for left foot
  translate(160, 0);
  //ellipse(0, 0, 10, 10);
  rect(0, 0, 140, 60);

  pop();

  // ** END FEET **

  push();

  // ** ARMS **

  //translate for right arm
  translate(-100, -175);
  //ellipse(0, 0, 10, 10);
  strokeWeight(50);
  line(0, 10, -100, -25);
  line(-100, -25, -100, -150);

  // ** RIGHT HAND

  stroke('rgb(255,224,189)');
  strokeWeight(75);
  point(-100, -150);

  pop();

  push();

  //translate for left arm
  translate(100, -150);
  //ellipse(0, 0, 10, 10);
  angleMode(DEGREES);
  rotate(180);
  strokeWeight(50);
  line(0, 10, -100, -25);
  line(-100, -25, -100, -150);

  // ** LEFT HAND

  stroke('rgb(255,224,189)');
  strokeWeight(75);
  point(-100, -150);

  pop();

  // ** END ARMS **

  // ** HEAD **

  push();

  translate(0, -270);
  fill('rgb(255,224,189)');
  ellipse(0, 0, 200, 215);
  //ellipse(0, 0, 10, 10);

  // ** MOUTH

  noFill();
  strokeWeight(6);
  //line(50, -50, -50, -50);
  arc(0, 50, 90, 50, 0, 180);




  pop();

  pop();



}
