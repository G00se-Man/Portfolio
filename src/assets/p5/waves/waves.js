
let counter = 0;
let memee = 0;
function setup() {
  var cnv = createCanvas(windowWidth/6, windowHeight/6);
  cnv.parent("project_container_animation"); 
  angleMode(DEGREES);
  rectMode(CENTER);
}



function draw() {
  memee = memee + 1;
  scale(0.3);
  background('#232530');
  noFill();
  stroke(255);
  translate(width * 1.5  , height * 1.6 );
  
  var r = map(sin(counter), -1,1,50,255);
  var g = map(sin(counter / 4 ), -1,1,50,255);
  var b = map(sin(counter * 4 ), -1,1,50,255);
  translate(50,0);
  stroke(r,g,b);
  strokeWeight(2); 
  for (var i = 0; i < 120; i++){
      push();
      //Shape of sine rule
      // +i lags behind the other squares to give the effect
      // value after frameCount is how much it will rotate
      rotate(cos(frameCount + i) * 200);
      //Size of sin rule
      // - makes the shape look like it shrinks
      // number after the operation  is the shape of the empty space
      rect(0,0,600 - i * 3,600 - i * 3, 150 - i);
      pop();
      
     // push();
      //Shape of sine rule
      // +1 lags behind the other squares to give the effect
      //rotate(-tan(frameCount + i ) * 100);
      //Size of sin rule
      // - makes the shape look like it shrinks
      //rect(0,0,300 - i * 3,300 - i * 5, 100 - i);
     // pop();
      counter += 1 / 100;
  }

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
 
}
