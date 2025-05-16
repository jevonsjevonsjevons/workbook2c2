function setup() {
  createCanvas(windowWidth, windowHeight * 0.99);
    background(255,255,255);
    frameRate(100);// adjusts how many frames a second, adjusts the continuity of the lines, circles etc being drawn
    }
    
    
    function draw() {
      fill(190,60,50);
      stroke(225, 224, 0);
      circle(mouseX, mouseY, 50);
    fill(20,150,280);
    //stroke(125,124,0);
    square(mouseY, mouseX, 50);
    }
