var beef = function( p ) { 
  p.counter = 0;
  p.x = 0;
  p.y = 0;
  p.gap = 0;
  p.r = 0;
  p.g = 0;
  p.b = 0;



p.setup = function() {
  p.createCanvas(600, 200);

  p.numOfdots = p.createSlider(1,80,50);
  p.createElement('p', "Number of dots:").parent(canvas_container_loop).class('basic_font');
  p.numOfdots.parent("canvas_container_loop");

  p.sinAngle = p.createSlider(1,100,25);
  p.createElement('p', "Sin angle:").parent(canvas_container_loop).class('basic_font');
  p.sinAngle.parent("canvas_container_loop");

  p.cosAngle = p.createSlider(1,100,25);
  p.createElement('p', "Cos angle:").parent(canvas_container_loop).class('basic_font');
  p.cosAngle.parent("canvas_container_loop");

  p.loopGap = p.createSlider(0,100,20);
  p.createElement('p', "Loop gap:").parent(canvas_container_loop).class('basic_font');
  p.loopGap.parent("canvas_container_loop");

  //sin: 65 cos: 15
  p.noStroke();
  p.angleMode(p.DEGREES);
  p.rectMode(p.CENTER);
  p.background(20);
}



p.draw = function() {
  //background("rgba(0,0,0,0.01)");
  p.background('#18191f');
  
  p.r = p.map(p.sin(p.frameCount ), -1,1,50,255);
  p.g = p.map(p.sin(p.frameCount / 4 ), -1,1,50,255);
  p.b = p.map(p.sin(p.frameCount / 2), -1,1,50,255);
  p.fill(p.r,p.g,p.b);
  p.scale(0.4);
  for(var i = 0; i < p.numOfdots.value(); i++){
    
      p.y = (p.sin(p.counter + i * p.sinAngle.value()) * 100) + p.height / 0.8;
      p.x = (p.cos(p.counter + i * p.cosAngle.value()) * 100) + p.width / 2;

      p.gap = i * p.loopGap.value();
      p.ellipse(p.x + p.gap, p.y , 25, 25);

  }
  p.counter += 5;
  
}

}

var myp5 = new p5(beef, 'looper');