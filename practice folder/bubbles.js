class Ball {
  constructor(x, y, r) {
  this.x = random(0, windowWidth);
  this.y = random(0, windowHeight);
  this.r = random(50, 75);
  this.delta_x = 2;
  this.delta_y = 2;
  this.scale_x = 2;
  this.scale_y = 2;
  this.col =('rgb(255, 32, 10)');
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
