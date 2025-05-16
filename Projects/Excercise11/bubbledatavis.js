let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight * 0.99);
  for (let i = 0; i < 30; i++) {
    bubbles.push({
      x: random(width),
      y: random(height),
      r: random(20, 60),
      dx: random(-1, 1),
      dy: random(-1, 1),
      label: "Data " + i
    });
  }
}

function draw() {
  background(30);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(12);
  fill(255);

  for (let b of bubbles) {
    fill(100, 150, 255, 180);
    ellipse(b.x, b.y, b.r);

    // hover
    if (dist(mouseX, mouseY, b.x, b.y) < b.r / 2) {
      fill(255);
      text(b.label, b.x, b.y);
    }

    // move
    b.x += b.dx;
    b.y += b.dy;

    // bounce
    if (b.x < 0 || b.x > width) b.dx *= -1;
    if (b.y < 0 || b.y > height) b.dy *= -1;
  }
}
