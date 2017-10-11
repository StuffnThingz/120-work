// Silly Robot setup

let angle = 0;

function setup() {
    createCanvas( 1500, 700 );
    angleMode(DEGREES);

}

function draw() {
    // erase every frame
    background( 'rgb(240, 240, 240)' );
    // turn the cursor off
    noCursor();

    //*****************
    // Robot Sandbox
    //*****************

    push();

    // Make robot follow mouse
    translate( mouseX, mouseY );


    // ** Body **
    push();

    strokeWeight( 0 );
    fill( 'rgb(169,169,169)' );
    rect( 0, 0, 150, 250 );

    push();
    // ** arms **

    // right arm

    stroke( 'rgb(129, 127, 127)' );
    strokeWeight( 15 );
    line( 0, 7, -75, 7 );
    line( -75, 7, -75, 200 );
    stroke( 'rgb(169,169,169)' );
    strokeWeight(50);
    point( -75, 200 );


    // left arm

    stroke( 'rgb(129, 127, 127)' );
    strokeWeight( 15 );
    line( 150, 7, 225, 7 );
    line( 225, 7, 225, 200 );
    stroke( 'rgb(169,169,169)' );
    strokeWeight(50);
    point( 225, 200 );

    pop();

    push();
    // ** HEAD **

    // neck

    translate( 75, 0 );
    stroke( 'rgb(129, 127, 127)' );
    strokeWeight( 20 );
    strokeCap(SQUARE);
    line( 0, 0, 0, -25 );

    pop();

    push();
    // actual head

    translate( 75, 0 );
    noStroke();
    fill( 'rgb(169,169,169)' );
    rect( -45, -150, 90, 125 );

    // eyes

    translate( 0, -100 );
    stroke( 'rgb(254, 4, 14)' );
    strokeWeight( 12 );
    point( -20, 0 );

    scale( -1, 1 );
    stroke( 'rgb(254, 4, 14)' );
    strokeWeight( 12 );
    point( -20, 0 );


    push();
    // mouth

    noStroke();
    fill( 'rgb(255, 255, 255)' );
    rect( -30, 25, 60, 30 );

    push();
    // teeth

    stroke( 0 );
    strokeWeight( 3 );
    //ellipse( 0, 0, 10, 10 );
    line( 29, 40, -29, 40 );
    line( 10, 26, 10, 54 );
    scale( -1, 1 );
    line( 10, 26, 10, 54 );

    push();
    // propeller

    stroke( 'rgb(129, 127, 127)' );
    strokeCap(SQUARE);
    strokeWeight( 10 );
    line( 0, -50, 0, -85 );

    pop();

    push();
    // blades
    translate( 0, -85, );
    rotate(angle);
    //ellipse( 0, 0, 10, 10 );
    stroke( 'rgb(169,169,169)' );
    strokeCap(ROUND);
    strokeWeight( 10 );
    line( -20, -20, 20, 20 );
    line( 20, -20, -20, 20 );

    // make blades rotate
    angle =  angle + 3;

    pop();

    // ** END HEAD **

    // ** LEGS **

    push();
    // right leg

    translate( 0, 350, );
    //ellipse( 0, 0, 10, 10 );
    stroke( 'rgb(129, 127, 127)' );
    strokeCap(SQUARE);
    strokeWeight( 20 );
    line( -50, 0, -50, 150 );

    // left leg

    scale( -1, 1 );
    stroke( 'rgb(129, 127, 127)' );
    strokeCap(SQUARE);
    strokeWeight( 20 );
    line( -50, 0, -50, 150 );

    pop();
    push();
    // right propeller

    translate( -50, 500 );
    //ellipse( 0, 0, 10, 10 );
    rotate( mouseX );
    rotate( mouseY );
    stroke( 'rgb(169,169,169)' );
    strokeWeight( 15 );
    line( -45, 45, 45, -45 );
    line( -45, -45, 45, 45 );

    pop();
    push();
    // left propeller

    translate( 50, 500 );
    //ellipse( 0, 0, 10, 10 );
    rotate( mouseX );
    rotate( mouseY );
    stroke( 'rgb(169,169,169)' );
    strokeWeight( 15 );
    line( -45, 45, 45, -45 );
    line( -45, -45, 45, 45 );

    pop();

    //*****************
    // End Robot Sandbox
    //*****************
     resetMatrix();
     translate( windowWidth/2, windowHeight/2 );
     rect( -75, -37.5, 150, 75 );





  }
