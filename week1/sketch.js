function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  stroke(255);
  noFill();
  circle(mouseX,mouseY,25);
}
