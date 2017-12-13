class Ball {
  constructor() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.r = random(40, 75);
  this.delta_x = random(2, -2);
  this.delta_y = random(2, -2);
  this.scale_x = random(2, -2);
  this.scale_y = random(2, -2);
  this.col =('rgb(255, 32, 10)');

  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }
}



  move() {
    this.x += this.delta_x * this.scale_x;
    this.y += this.delta_y * this.scale_y;

    if (this.x >= width || this.x <= 0) {
        this.delta_x = -1 * this.delta_x;
    }
    if (this.y >= height || this.y <= 0) {
        this.delta_y = -1 * this.delta_y;
  }
}

  show() {
    stroke('rgb(0, 0, 0)');
    strokeWeight(3);
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}
