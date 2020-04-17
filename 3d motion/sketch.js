angle = 0;
boxWidth = 25;

function setup() {
  createCanvas(600, 600, WEBGL);
  maxD = dist(0, 0, 400, 400);
  c1 = color(255,72,128);
  c2 = color(50,72,128);
}

function draw() {
  background(160);
  ortho(-600, 600, -600, 600, -1000, 1000);
  directionalLight(255, 255, 255, -1, 1, -1);

  translate(0, 50, 0);
  rotateX(-QUARTER_PI);
  rotateY(atan(1 / sqrt(2)));

  rectMode(CENTER);
  let offset = 0;

  for (let z = 0; z < height; z += boxWidth) {
    for (let x = 0; x < width; x += boxWidth) {
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -5, 5);
      let a = angle + offset;
      let boxHeight = map(sin(a), 1, -1, 10, 500);
      let inter = map(sin(a), 1, -1, 0, 0.75);
      let c = lerpColor(c1, c2, inter);
      ambientMaterial(c);
      noStroke();
      translate(x - width / 2, 0, z - height / 2);
      box(boxWidth, boxHeight, boxWidth);
      //(x - width / 2, 0, 10, h);
      pop();
    }
  }
  angle -= 0.15;
}
