class Ball {
  constructor() {
  this.x = random(0, windowWidth);
  this.y = random(0, windowHeight);
  this.r = random(10, 75);
  this.delta_x = random(2, -2);
  this.delta_y = random(2, -2);
  this.scale_x = random(2, -2);
  this.scale_y = random(2, -2);
  this.col =('rgb(255, 32, 10)');

  this.intersects = function(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }
}


  move() {
    this.x += this.delta_x;
    this.y += this.delta_y;
    if (this.x + this.r >= width || this.x - this.r <= 0) {
        this.delta_x *= -1;
    }
    if (this.y + this.r >= height || this.y - this.r <= 0) {
        this.delta_y *= -1;

  }
}

  show() {
    stroke('rgb(0, 0, 0)');
    strokeWeight(3);
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2);
  }
}
