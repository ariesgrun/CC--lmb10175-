function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

}


function draw() {

    
    for (let i = 0; i < width; i += 100) {
    for (let j = 0; j < height; j += 100) {
      push();

      translate(i+50, j);

      noStroke();
      fill("#8EAB62")
      for (let k = 0; k < 6; k++) {
        rotate(60);
        ellipse(0, -5, 15, 35);
      }

      fill("#6F914A")
      circle(0, 0, 15);

      pop();
    }
  }




}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


