function setup() {
  createCanvas(windowWidth, windowHeight);
  s = new Sistema();
}

function draw() {
  circle(mouseX, mouseY, 20);
  s.update;
  s.display;
}

// let p;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   p = new Particula(width / 2, height / 2);
// }

// function draw() {
//   if (p.isAlive) {
//     p.update();
//     p.display();
//   }
// }
