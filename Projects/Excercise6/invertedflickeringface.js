var capture;
function setup() {
  createCanvas(windowWidth, windowHeight * 0.99);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();
  imageMode(CENTER);
}
function draw() {
  //background(255);
  image(capture, mouseX, mouseY, capture.width, capture.height);
  filter(INVERT);
}
