function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  for ( i=0; i < width; i += 100) {
    for ( j=0; j < height; j += 100) {
      circle(10+i, 10+j, 10);
    }
  }
}
