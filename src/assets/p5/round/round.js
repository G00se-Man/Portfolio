var sketchFive = function( p ) { 
p.counter = 0;
p.size = 50;
p.inc = 1;
p.spin = 1;
p.zpos = 1;
p.move = 1;
p.pos = 0;
p.z = 0;
p.r = 0;
p.g = 0;
p.b = 0;
p.setup = function () {
  var canvasDiv = document.getElementById('round');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = p.createCanvas(width,500, p.WEBGL);
  console.log(sketchCanvas);
  sketchCanvas.parent("round");
  p.rectMode(p.CENTER);
  
  p.speed = p.createSlider(0.001, 0.02, 0.005, 0.001);
  
  p.createElement('p', "Time:").parent(canvas_container_round).class('basic_font');
  p.speed.parent("canvas_container_round");
  
  p.NumOfBalls = p.createSlider(1,100,100);
  
  p.createElement('p', "Number of balls:").parent(canvas_container_round).class('basic_font');
  p.NumOfBalls.parent("canvas_container_round");
  
  p.posA = p.createSlider(0,1000,0);
  
  p.createElement('p', "Position change:").parent(canvas_container_round).class('basic_font');
  p.posA.parent("canvas_container_round");
  
  p.size = p.createSlider(10,300,50);
  
  p.createElement('p', "Size:").parent(canvas_container_round).class('basic_font');
  p.size.parent("canvas_container_round");
}

p.windowResized = function() {
  var canvasDiv = document.getElementById('round');
  var width = canvasDiv.offsetWidth;
  
  var sketchCanvas = p.createCanvas(width,450);
  sketchCanvas.parent("round");
}


p.draw = function () {
  if(width < 1100){

    p.scale(0.6)
  }else{
    p.scale(0.9)
  }
  p.background('#18191f');
  p.rectMode(p.CENTER);
  p.push();
    p.scale(0.6);
    p.orbs();
    p.pop();
    p.scale(0.6);
    p.rotateX(-p.spin);
    p.orbs();
}




p.orbs = function(){
  //lights();
//p.z = (p.sin(p.counter*100));

 p.r = p.map(p.sin(p.frameCount / 40), -1,1,50,255);
 p.g = p.map(p.sin(p.frameCount / 60 ), -1,1,50,255);
 p.b = p.map(p.sin(p.frameCount / 70), -1,1,50,255);
  p.rotateX(p.spin);
  p.spin = p.spin + 0.005;
  p.zpos = p.zpos + 1;
  p.move = p.move * 1;
  p.noStroke();
      p.push();
  p.fill(p.r+100,p.g+100,p.b+100);
  p.translate(p.move,0,p.z);
  p.sphere(60,24,24);
  p.pop();
  //scale(0.9);
     
  for( x = 0; x <  p.NumOfBalls.value(); x++){

    p.rotateZ(p.frameCount * p.speed.value()); //slow down time
    p.scale(0.9);
    p.pos = x * 120;
   
    p.fill(p.r,p.g,p.b);
    p.push();
    p.translate(p.pos,p.posA.value(),p.posA.value());// ball position
    p.sphere(p.size.value(),24,24);
    p.pop();
    p.push();
    p.translate(-p.pos,p.posA.value(),p.posA.value());
    p.sphere(p.size.value(),24,24);
    p.pop();
    
    p.push();
    p.translate(p.posA.value(),p.pos,p.posA.value());
    p.sphere(p.size.value(),24,24);
    p.pop();
    p.push();
    p.translate(p.posA.value(),-p.pos,p.posA.value());
    p.sphere(p.size.value(),24,24);
    p.pop();
    
    
  }
  //  counter += 0.0001;


}
}
var myp5 = new p5(sketchFive, 'round');
