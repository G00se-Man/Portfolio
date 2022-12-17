var sketchFour = function( p ) { 
  
p.move = 0;
p.mask = 0 ;
p.spacing = 0.1;
p.xnoise = 0;
p.ynoise = 0;
p.n = 0;
p.h = 0;
p.r = 0;
p.g = 0;
p.b = 0;

p.setup = function() {
  var canvasDiv = document.getElementById('peril');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = p.createCanvas(width /1.2,200);
  console.log(sketchCanvas);
  sketchCanvas.parent("peril");
p.angleMode(p.DEGREES);
p.noiseDetail(1,1);
p.background('#18191F');

p.wave = p.createSlider(1,90,1);
p.wave_size = p.createSlider(1,10,10);
p.no_of_bars = p.createSlider(2,25,25);
p.power = p.createSlider(1,200,1);


p.createElement('p', "Wave delay:").parent(canvas_container_peril).class('basic_font');
p.wave.parent("canvas_container_peril");

p.createElement('p', "Wave width:").parent(canvas_container_peril).class('basic_font');
p.wave_size.parent("canvas_container_peril");

p.createElement('p', "Number of bars:").parent(canvas_container_peril).class('basic_font');
p.no_of_bars.parent("canvas_container_peril");

p.createElement('p', "Wave power:").parent(canvas_container_peril).class('basic_font');
p.power.parent("canvas_container_peril");

}

p.windowResized = function() {
  var canvasDiv = document.getElementById('peril');
  var width = canvasDiv.offsetWidth;
  
  var sketchCanvas = p.createCanvas(width,200);
  console.log(sketchCanvas);
  sketchCanvas.parent("peril");
}



p.draw = function() {
  p.background("rgba(24,25,31,0.01)");
  if(width < 1100){
    p.scale(0.3)
    p.translate(0,300)
  }
  // p.background(31);
  p.noStroke();

  //translate(width / 2, height / 2);
  //var spacing = 0.1;
  p.push();
  for (var x = 0; x < p.no_of_bars.value(); x += p.spacing){
    p.xnoise = p.map(p.cos(x * 8), -1 , 1 , 0 ,p.wave.value());
    p.ynoise = p.map(p.cos(x * p.power.value()), -1 , 1 , 0 , 20);
    
    p.n = p.noise(p.xnoise + p.move ,p.ynoise + p.move);
    
    p.h = p.map(p.n,0,1,-350,300);
    
      p.r = p.map(p.sin(p.frameCount ), -1,1,50,255);
      p.g = p.map(p.sin(p.frameCount / 4 ), -1,1,50,255);
      p.b = p.map(p.sin(p.frameCount  / 2), -1,1,50,255);
      p.fill(p.r,p.g,p.b);
    p.translate(10,0);
    // Poistion x,y // Size x,y
    p.rect(-170, p.height ,p.wave_size.value(),p.h);
  }
    p.move += 0.01;
  p.pop();
}

}
var myp5 = new p5(sketchFour, 'peril');
