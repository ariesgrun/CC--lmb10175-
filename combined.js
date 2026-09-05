
//background reference : https://editor.p5js.org/joshgiesbrecht/sketches/iUPHX1UQz

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES)

//     for (let i = 0; i < width; i += 150) {
//         for (let j = 0; j < height; j += 100) {
//         push();

//         translate(i+50, j+150);

//         noStroke();
//         fill("#8EAB62")
//         for (let k = 0; k < 6; k++) {
//             rotate(60);
//             ellipse(0, -5, 15, 35);
//         }

//         fill("#6F914A")
//         circle(0, 0, 15);

//         pop();
//     }
//   }



}

//making eyes that track mouse
//reference https://p5js.org/examples/Angles-And-Motion-Aim & THE UNIT CIRCLE
//push/pop = contains objects as independent groups


function draw() {

  //eyes with pup

  ellipse(windowWidth*0.4, 50, 70, 50); // left eye
  ellipse(windowWidth*0.6, 50, 70, 50); // right eye
  // ellipse(windowWidth*0.4, 50, 25, 25); // reference for left pupil origin
  // ellipse(windowWidth*0.6, 50, 25, 25); // reference right pupil origin
//////////////////////////////////////////////////////////////////

  let leftAngle = atan2(mouseY - 50, mouseX - windowWidth*0.4); //from referenced link
  let rightAngle = atan2(mouseY - 50, mouseX - windowWidth*0.6); //from referenced link

  //left pupil direction
  push(); 
  let LeftPupilX = windowWidth*0.4 + cos(leftAngle) * 15; //determines if x pos is - or + from center
  let LeftPupilY = 50 + sin(leftAngle) * 12; //determines if y pos is - or +
  fill(0); //black
  ellipse(LeftPupilX, LeftPupilY, 25, 25);
  pop();

  //right pupil direction
  push(); 
  let RightPupilX = windowWidth*0.6 + cos(rightAngle) * 15; 
  let RightPupilY = 50 + sin(rightAngle) * 12; 
  fill(0); //black
  ellipse(RightPupilX, RightPupilY, 25, 25);
  pop();

      for (let i = 0; i < width; i += 150) {
        for (let j = 0; j < height; j += 100) {
        push();

        translate(i+50, j+150);

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
//reference https://editor.p5js.org/bad/sketches/1pQuWa8bj
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}