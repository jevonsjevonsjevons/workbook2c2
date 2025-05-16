// PRELOAD IMAGE + IMAGE FOLLOWS MOUSE
var pic;
 
function preload(){
pic=loadImage("data/Photo1.jpg");
}
function setup() {
createCanvas(windowWidth, windowHeight * 0.99);
background("black");
imageMode(CENTER, CENTER);
}
function draw() {
scale(2);
image(pic, mouseX/2, mouseY/2);
}
