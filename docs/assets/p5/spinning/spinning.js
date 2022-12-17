const sketchTwo = function( p ) { 

  

  p.r = 0;
  p.g = 0;
  p.b = 0;

  p.setup = function() {
    width = p.windowWidth *  0.5;
    height = p.windowHeight * 0.5;
    let canvas2 = p.createCanvas(width,height);
    canvas2.parent('spinning');
  
  p.angleMode(p.DEGREES);
  p.rectMode(p.CENTER);



  p.numOfRings = p.createSlider(1,100,13);
  p.createElement('p', "Number of rings:").parent('canvas_container').class('basic_font');
  p.numOfRings.parent("canvas_container");

  p.delay = p.createSlider(1,500,100);
  p.createElement('p', "Delay:").parent('canvas_container').class('basic_font');
  p.delay.parent("canvas_container");

  p.xSize = p.createSlider(400,1000,600);
  p.createElement('p', "X axis Size:").parent('canvas_container').class('basic_font');
  p.xSize.parent("canvas_container");

  p.ySize = p.createSlider(500,1000,600);
  p.createElement('p', "Y axis Size:").parent('canvas_container').class('basic_font');
  p.ySize.parent("canvas_container");

  
}

p.draw = function() {
  width = p.windowWidth;
  height = p.windowHeight;
  if(width < 1100){
      p.resizeCanvas(width / 1.2, height / 1.2);
      p.translate(width/2.4, height/2.4);
      p.scale(0.4);
    }else{
        p.resizeCanvas(width/2, height/2 );
        p.translate(width/4, height/4);
        p.scale(0.5);
      }
  // p.resizeCanvas(width / 1.2, height / 1.2);
  p.background('#18191f');
  p.noFill();
  p.stroke(255);

  
  for (var i = 0; i < p.numOfRings.value(); i++){
      p.push();
      //Shape of sine rule
      p.rotate(p.tan(p.frameCount + i) * p.delay.value());
      
      p.r = p.map(p.sin(p.frameCount), -1,1,50,255);
      p.g = p.map(p.sin(p.frameCount / 2 ), -1,1,50,255);
      p.b = p.map(p.sin(p.frameCount * 2 ), -1,1,50,255);
      p.stroke(p.r,p.g,p.b);
      //Size of sin rule
      p.rect(0,0,p.xSize.value() - i * 3,p.ySize.value() - i * 5, 200 - i);
      p.pop();
  }
  
 
  }
}

var myp5 = new p5(sketchTwo, 'spinning');