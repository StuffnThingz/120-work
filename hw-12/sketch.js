var ball = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < 25; i++) {
      ball[i] = new Ball();
    }
}

function draw() {
  background('rgb(51, 0, 255)')
//create array to store ball to delete
let toDelete = [];
  for (let i = 0; i < ball.length; i ++) {
    toDelete.push(false);
}

//moves balls

for (var i = ball.length - 1; i >=0; i--) {
  ball[i].move();
  ball[i].show();
}

//check for intersection

for(var i = ball.length - 1; i >= 0; i--) {
  for(var j = ball.length - 1; j >= 0; j--) {
    if(i != j && ball[i].intersects(ball[j])) {

      // if balls intersect, set the corresponding

      // toDelete element to true.

      // This eliminates the problem of deleting ball

      // objects when other processes may

      // still call them.

      toDelete[i] = true;

      toDelete[j] = true;
      }
    }
  }

  //Delete ball that are intersecting

  for (let i = toDelete.length - 1; i >= 0; i--) {
    if(toDelete[i]) {
      ball.splice(i, 1);
    }
  }

  //recreate balls

  if(ball.length <= 1) {
    for(vari = 0; i <25; i ++) {
      ball.push(new Ball());
    }
  }
}
