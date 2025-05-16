var capture;

function setup() {
  createCanvas(windowWidth, windowHeight * 0.75);
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();
}
function draw() {
  image(capture, 0, 0, width, height); // Draw video on canvas
  filter(INVERT); // Apply the filter to the entire canvas
}
