
// Setup code goes here
function setup() {
  createCanvas(700, 700);
 }


// Draw code goes here
function draw() {
  background(135, 206, 235);
  debug();
  other();
  head();
  face();
}

function debug() {
  fill(255);
  text("X: " + mouseX + "Y: " + mouseY, 20 , height-20);
}

function other() {
  fill(128, 128, 128);
  strokeWeight(0);
  arc(220, 600, 200, 280,PI, -HALF_PI);
  rect(219, 460, 300, 140);
  arc(519, 600, 200, 280, -HALF_PI, 0);
  //This is cloth

  fill(255, 228, 196);
  arc(370, 460, 170, 150, 0, PI);
  strokeWeight(5);
  var x = 290;
  var y = 472;
  var x2 = 323;
  var y2 = 484;
  line(x, y, x2, y2);
  line(width-x+25, y, width-x2+25, y2);
  strokeWeight(0);
  rect(width/2-30, 380, 100, 80);
  //This is neck
}

function head() {
  fill(255, 228, 196);
  strokeWeight(1);
  arc(width/2+30, 270, 200, 300, -QUARTER_PI, PI+QUARTER_PI, OPEN);
  //Basic

  fill(0);
  bezier(278, 268, 340, 263, 376, 284, 376, 186);
  bezier(292,202, 608,210, 466,100, 304,164);
  bezier(304,164, 244,200, 250,350, 373,200);
  //Hair

  fill(255, 228, 196);
  strokeWeight(2);
  bezier(308, 266, 269, 261, 270, 290, 305, 316);
  translate(150, 147);
  scale(0.5);
  bezier(308, 266, 269, 261, 270, 290, 305, 316);
  scale(2);
  translate(-150, -147);
  //Ear
}

function face(){
  bezier(430,298, 441,308, 450,333, 430,326);
  bezier(427,314, 417,315, 422,328, 430,326);
  //nose

  fill(0);
  strokeWeight(4);
  line(372,246, 415,244);
  line(445,239, 476,232);
  //eyebrow

  fill(219,112,147);
  strokeWeight(1);
  bezier(385,365, 409,400, 425,366, 446,359);
  //mouth

  fill(255,255,255);
  strokeWeight(1);
  ellipse(395,275, 50, 30);
  arc(465,267, 50, 30, QUARTER_PI, -QUARTER_PI, OPEN);
  strokeWeight(7);
  point(401,276);
  point(460,266);
  //eye
  
}