var song; //initiating our variable
var analyzer;
function preload() {
 song = loadSound ('data/groove.mp3'); 
}

function setup() {
  //song = loadSound ('data/beat.mp3'); //associate our sound to the variable 'song'
  createCanvas(windowWidth, windowHeight * 0.99);
  background(0);
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  fill(120);
  textSize(150);
  textAlign(CENTER,CENTER);
}

function draw() {
  background(0, 10);
  fill(120);
  var volume = analyzer.getLevel();
  volume*=400;
  //ellipse(width/2,height/2,volume,volume);
  fill(255);
  textSize(volume*2);
  translate(width/2,height/2);
  textX=map(volume, 0, 400, 0, windowWidth);
  textY=map(volume, 0, 400, 0, windowHeight);
  rotate(volume);
  text('PLS DONT FAIL ME', 0, 0);
}

function mousePressed() {
  if (song.isPlaying()) {
    background(120,120,120);
    song.stop(); // if the song is playing, stop it
    song.noLoop();
  }
  else {
    background(0);
    song.loop();
    song.play(); 
  }
}