var words = ["stuff", "things", "junk"]

var nums = [100, 25, 46, 72];

var num = 23;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(0);

	fill(255);
	ellipse(100, 200, nums[2], nums[2]);
	ellipse(200, 200, num, num);
	textSize(32);
	text(words[0], 12, 200)
}
