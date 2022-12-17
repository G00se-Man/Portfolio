var move = 0;
var mask = 0 ;

function setup() {
createCanvas(1920, 1080);
angleMode(DEGREES);
noiseDetail(1,1);
background(31);
}


function draw() {
  background("rgba(31,31,31,0.01)");
  
      if (frameCount === 1){
    capturer.start();
  }
  //background(31);
  noStroke();
  //translate(width / 2, height / 2);
  var spacing = 0.1;
  push();
  for (var x = 0; x <25; x += spacing){
    var xnoise = map(cos(x * 8), -1 , 1 , 0 ,0.5);
    var ynoise = map(cos(x), -1 , 1 , 0 , 12);
    
    var n = noise(xnoise + move ,ynoise + move);
    
    var h = map(n,0,1,-900,300);
    
      var r = map(sin(frameCount ), -1,1,50,255);
      var g = map(sin(frameCount / 4 ), -1,1,50,255);
      var b = map(sin(frameCount  / 2), -1,1,50,255);
      fill(r,g,b);
    translate(10,0);
    // Poistion x,y // Size x,y
    rect(-170, height ,20,h);
  }
    move += 0.01;
  pop();
  
  
  
    if(frameCount < 60 * 60){
    capturer.capture(canvas);
    console.log(frameCount);
  } else if (frameCount === 60 * 60){
    capturer.stop();
        capturer.save();
  }
}
