class Ball {
  constructor(x, y) {
  this.x = x;
  this.y = y;
  this.r = random(10, 75);
  this.delta_x = random(3, -3);
  this.delta_y = random(3, -3);
}

this.display = function() {
  strokeWeight(2);
  fill('rgb(255, 32, 10)');
  ellipse(this.x, this.y, this.r * 2, this.r *2);
}


 this.intersects = function(other) {
  var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }

  this.update = function() {
    this.x += this.delta_x;
    this.y += this.delta_y;
}

  this.edgeCheck = function() {
    if (this.x + this.r >= width || this.x - this.r <= 0) {
        this.delta_x *= -1;
    }
    if (this.y + this.r >= height || this.y - this.r <= 0) {
        this.delta_y *= -1;

    }
  }
}
