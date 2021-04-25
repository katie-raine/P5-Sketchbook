
  class circle {
      constructor(x, y, pz, sx, sy, r, g, b, a) {
          this.x = 0;
          this.y = 0;
          this.pz = this.z;
          this.sx = 0;
          this.sy = 0;
          this.r = 0;
          this.g = 0;
          this.b = 0;
          this.a = 0;
      }

      random() {
          this.x = random(0, width);
          this.y = random(0, height);
          this.z = random(0, 100);
          this.sx = random(2, height/4);
          this.sy = random(2, width/4);
          this.r = random(0, 255);
          this.g = random(0, 255);
          this.b = random(0, 255);
          this.a = random(200, 255);
      }

      draw_circle() {
          this.pz = this.z;
          fill(this.r, this.g, this.b, this.a);
          strokeWeight(0);
          frameRate(5);
          rotate(random(0, 80));
          rect(this.x, this.y, this.sx, this.sy);
      }
  }
