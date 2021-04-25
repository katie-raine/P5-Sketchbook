
  class customrect {
    constructor(x, y, sizex, sizey, r) {
      this.x = random(0, 100);
      this.y = random(0, 100);
      this.sizex = width*-2;
      this.sizey = height*-2;
      this.r = random(0, 360);
    }

    draw() {
      frameRate(60);
      strokeWeight(.01);
      fill(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
      rect(this.x, this.y, this.sizex, this.sizey); // for original sketch go back to rect
      rotate(this.r);
    }
  }
