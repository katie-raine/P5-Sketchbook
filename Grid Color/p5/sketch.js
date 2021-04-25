var size = 60;
var decreasing = true;

function setup() {
  createCanvas(500, 500);
}

function draw() {
background(0);
frameRate(9);
  if(size > 2 & decreasing == true) {
  size -=.15*2;
  }
  else {
    decreasing = false;
  }
  if(size < 50 & decreasing == false) {
  size +=.15 * 8;
  }
  else {
    decreasing = true;
  }
  for(var i = 0; i < width; i+=size) {
    for(var j = 0; j < height; j+=size){
      noStroke();
      fill(random(0, 255), random(0, 255), random(0, 255));
      rect(i, j, size, size);
    }
  }
}
