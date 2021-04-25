
  var object = [];
  var released = false;

  function setup() {
    createCanvas(800, 800);
    background(15);
  }

  function draw() {
    if (released == true) {
      released = false;
      for (var i = 0; i < 100; i++) {
        object[i] = new customrect();
        object[i].draw();
      }
    }
  }

  function mouseReleased(fxn) {
    released = true;
  }
