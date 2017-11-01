var x = 25;
var y = 25;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background('rgb(217, 217, 217)');

	translate(width/2, height/2);
		ellipse(0, 0, x, y);

		if( x >= width) {
			ellipse(0, 0, x, y);
		}

x += 3;
y += 3;
}
