	// set up canvas
	function setup() {
	createCanvas (windowWidth, windowHeight);
	frameRate(5); // slow down framerate so you can see colors more clearly.
}
// setup canvas and stroke/ color for lines.
function draw() {
	background('#FFF771');
	strokeWeight(5);
	stroke('#FF803A');
	// make a 4x4 panel
	//for(line_x = 0; line_x <= width; line_x += width/2) {
		for(line_y = 0; line_y <= height; line_y += height/2) {
			line(line_x, 0, line_x, width);
			line(line_x, line_y, width, line_y);

		}
	}
	// making a ellipse in every panel that randomly changes color.
	// using keyISPressed to turn off flashing circles.
	if(keyIsPressed === false){
	for(var_x = width/4; var_x < width; var_x += width/2) {
		for(var_y = height/4; var_y < height; var_y += height/2) {
			noStroke();
			fill(random(255), random(255), random(255));
			ellipse(var_x, var_y, width/2 - 10, height/2 - 10);
		}
	}
}
}
