// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/0jjeOYMjmDU

var angle = 0.4;
var xoff =0;
var yoff=0;
function setup() {
  var canvas = createCanvas(displayWidth, displayHeight*0.77);
  canvas.parent('sketch-div');
  background(132);



}

function draw() {
  background(136,189,188);
  if(mouseY>0&&mouseY<height) {
    angle = atan(constrain(mouseX - displayWidth / 2, -displayWidth, displayWidth) / constrain(mouseY - height, -displayHeight, displayHeight));
    angle = constrain(abs(angle),0.3,3);
  }

  stroke(255);



  strokeWeight(15);
  translate(displayWidth/2, height);
  branch(130);



}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 25) {
    push();
    rotate(angle);
    if(len<60){
      xoff=xoff+0.0001;
      yoff=yoff+0.0001;
      strokeWeight(len/10*(noise(xoff,yoff)+random(0.4,0.6)));
    }
    else{
      strokeWeight(len/10);
    }
    branch(len * 0.8);
    pop();
    push();
    rotate(-angle);
    if(len<60){
      xoff=xoff+0.0001;
      yoff=yoff+0.0001;
      strokeWeight(len/10*(noise(xoff,yoff)+random(0.4,0.6)));
    }
    else{
      strokeWeight(len/10);
    }
    branch(len * 0.8);
    pop();
  }

  //line(0, 0, 0, -len * 0.67);
}
