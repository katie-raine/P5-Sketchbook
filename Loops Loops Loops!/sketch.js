
  var c = [];
  var speed = 0;

  function setup() {
    createCanvas(800, 600);
    background(255);
  }

  function draw() {
    speed = map(mouseX, 0, width, 0, 45);
    for (var i = 0; i < speed; i++) {
      c[i] = new circle();
      c[i].random();
      c[i].draw_circle();
      if(mouseIsPressed) {
       save();
      }
    }
  }
