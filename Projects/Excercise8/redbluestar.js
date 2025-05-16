var spin=0;
var letterSize=400;

function setup() {
  createCanvas(windowWidth, windowHeight * 0.99);
  background(190,255,255);
  fill(0);
  angleMode(DEGREES);
  textAlign(CENTER);
  frameRate(60);
}

function draw() {
      background(255,0,0);
  fill(0,0,255); //text ink color
  push(300);
  translate(width/2,height/2);
  rotate(spin);
  textSize(letterSize);
  text ('hiiiiiiiiiiiiiiii', 0,-letterSize*0.3);

  //this will make the mouseX affect the spin direction and speed
  spin+=map(mouseX,0,width,-90,15); 
  letterSize=map(mouseY,0,height,8,72);
  circle(0,0,letterSize/2);
  noFill();
  stroke(0);
  circle(0,0,letterSize*10);
  pop();
}
