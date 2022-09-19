var sketch = function( p ) { 
var test = 1;

p.canvas;

 p.speed = 0; 
 p.num = 2;
 p.r = 0;
 p.g = 0;
 p.b = 0;
 p.gap = 0;
 p.x = 0;
 p.y = 0;
 p.sketchWidth = 0;
 p.sketchHeight = 0;

//  p.windowResized = function(){
//   p.resizeCanvas(p.windowWidth, p.windowHeight)

//   console.log("RESIZE");
//  }

 p.setup = function() {

  var canvasDiv = document.getElementById('square');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = p.createCanvas(width,450);
  console.log(sketchCanvas);
  sketchCanvas.parent("square");

  p.noStroke();
  p.angleMode(p.DEGREES);
  p.rectMode(p.CENTER);
  p.background('#18191F');

  p.numOfRows = p.createSlider(1,13,13);
  p.numOfCircles = p.createSlider(1,9,9);
  p.circleXSize = p.createSlider(0,100,30);
  p.angleA = p.createSlider(150,180,150);
  p.angleB = p.createSlider(150,180,150);
  p.TranX = p.createSlider(0,1300,0);
  p.TranY = p.createSlider(30,890,30);

  p.createElement('p', "Number of columns:").parent(canvas_container_rings).class('basic_font');
  p.numOfRows.parent("canvas_container_rings");
  p.createElement('p', "Number of rows:").parent(canvas_container_rings).class('basic_font');
  p.numOfCircles.parent("canvas_container_rings");
  p.createElement('p', "Circle size:").parent(canvas_container_rings).class('basic_font');
  p.circleXSize.parent("canvas_container_rings");
  p.createElement('p', "Angle X:").parent(canvas_container_rings).class('basic_font');
  p.angleA.parent("canvas_container_rings");
  p.createElement('p', "angle Y:").parent(canvas_container_rings).class('basic_font');
  p.angleB.parent("canvas_container_rings");
  p.createElement('p', "Position X:").parent(canvas_container_rings).class('basic_font');
  p.TranX.parent("canvas_container_rings");
  p.createElement('p', "Poistion Y:").parent(canvas_container_rings).class('basic_font');
  p.TranY.parent("canvas_container_rings"); 
}

p.windowResized = function() {
  var canvasDiv = document.getElementById('square');
  var width = canvasDiv.offsetWidth;
  
  var sketchCanvas = p.createCanvas(width,450);
  console.log(sketchCanvas);
  sketchCanvas.parent("square");
}


p.draw = function() {
  p.background("rgba(24,25,31,0.01)");
  p.scale(0.4);
  // p.translate(250,0)
  p.r = p.map(p.sin(p.frameCount ), -1,1,50,255);
  p.g = p.map(p.sin(p.frameCount / 4 ), -1,1,50,255);
  p.b = p.map(p.sin(p.frameCount / 2), -1,1,50,255);
  p.fill(p.r,p.g,p.b)
  p.translate(p.TranX.value(),p.TranY.value())
    for(var i = 0; i < p.numOfCircles.value(); i++){
        p.gap = i * 150;
          for(var q = 0; q < p.numOfRows.value(); q++){
            p.y = (p.cos(p.speed + i * 100 + q * p.angleA.value()) * 50) + p.height / 5;
            p.x = (p.sin(p.speed  + i * 100 + q * p.angleB.value()) * 50) + p.width / 8;
            p.ellipse(p.x + q * 150, p.y + p.gap, p.circleXSize.value(), p.circleXSize.value());
        }
    }
    p.speed += p.num;
}

}


var myp5 = new p5(sketch, 'rings');