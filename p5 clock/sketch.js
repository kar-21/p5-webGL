function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(51);

  translate(width / 2, height / 2);
  rotate(-PI / 2);

  let hr = hour();
  let min = minute();
  let sec = second();
  
  secondAngle = map(sec, 0, 60, 0, 2 * PI);
  minuteAngle = map(min, 0, 60, 0, 2 * PI);
  hourAngle = map(hr % 12, 0, 12, 0, 2 * PI);

  noFill();
  strokeWeight(4);

  stroke(255, 0, 128);
  push();
  rotate(secondAngle - PI / 2);
  line(0, 0, 0, 160);
  pop();
  arc(0, 0, 400, 400, 0, secondAngle);

  stroke(128, 255, 0);
  push();
  rotate(minuteAngle - PI / 2);
  line(0, 0, 0, 130);
  pop();
  arc(0, 0, 380, 380, 0, minuteAngle);

  stroke(0, 128, 255);
  push();
  rotate(hourAngle - PI / 2);
  line(0, 0, 0, 100);
  pop();
  arc(0, 0, 360, 360, 0, hourAngle);

  stroke(255);
  strokeWeight(6);
  point(0, 0);
}
