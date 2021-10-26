let movers = [];
let r, g, b;

function setup() {
  createCanvas(400, 400);
  background(255);

  r = random(255);
  g = random(255);
  b = random(255);

  for (var i = 0; i < 20; i++) {
    movers[i] = new Mover();
  }

  //mover = new Mover();
}

function draw() {
  background(255);

  for (let i = 3; i < movers.length; i++) {
    movers[i].update();
    movers[i].display();

    r = random(255);
    g = random(255);
    b = random(255);
  }
  //if (mouseIsPressed) {
    for (let i = 1; i < movers.length; i++) {
      noFill();
    //}

    //if (mouseIsPressed) {

    //} else {
    noFill();
    noStroke();

    //for (let i = 0; i < movers.length; i++) {
    //movers[i].update();
    //movers[i].display();
  }
}
