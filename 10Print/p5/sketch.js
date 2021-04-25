let x = 0;
let y = 0;
let spacing = 10;

function setup() {
  createCanvas(600, 600);
  background(20);
}

function draw() {
  stroke(random(0, 255));
  if(random(1) < .5) {
    line(x, y, x + 10, y + spacing)
  }
  else {
    line(x, y + spacing, x + spacing, y);
  }
  x = x + spacing;
  if(x > width) {
    x = 0;
    y = y + spacing;
  }
}
