var sketchThree = function( p ) { 
  p.counter = 0;
  
  p.r = 0;
  p.g = 0;
  p.b = 0;
  p.x = 0;
  p.y = 0;
  p.rad = 0;
  p.z = 0;
  
  p.setup = function () {
    var canvasDiv = document.getElementById('squares');
    var width = canvasDiv.offsetWidth;
    var sketchCanvas = p.createCanvas(width,450,p.WEBGL);
    console.log(sketchCanvas);
    sketchCanvas.parent("squares");
    p.angleMode(p.DEGREES);
    p.rectMode(p.CENTER);
  
    p.numOfshapes = p.createSlider(2,40,20);
    p.createElement('p', "Number of shapes:").parent(canvas_container_square).class('basic_font');
    p.numOfshapes.parent("canvas_container_square");
  
    p.shape = p.createSlider(5,200,90);
    p.createElement('p', "Shape:").parent(canvas_container_square).class('basic_font');
    p.shape.parent("canvas_container_square");
  
    p.speed = p.createSlider(0,20,5);
    p.createElement('p', "Speed:").parent(canvas_container_square).class('basic_font');
    p.speed.parent("canvas_container_square");
  
    p.delay = p.createSlider(0,30,30);
    p.createElement('p', "Delay:").parent(canvas_container_square).class('basic_font');
    p.delay.parent("canvas_container_square");
  
    p.height = p.createSlider(0,100,30);
    p.createElement('p', "Height:").parent(canvas_container_square).class('basic_font');
    p.height.parent("canvas_container_square");
  
    p.roationSpeed = p.createSlider(0,50,2);
    p.createElement('p', "Roation speed:").parent(canvas_container_square).class('basic_font');
    p.roationSpeed.parent("canvas_container_square");
    
  }

  p.windowResized = function() {
    var canvasDiv = document.getElementById('squares');
    var width = canvasDiv.offsetWidth;
    
    var sketchCanvas = p.createCanvas(width,450,p.WEBGL);
    sketchCanvas.parent("squares");
  }
  
  
  p.draw = function () {
    p.background('#18191f');
    p.rotateX(70);
    p.r = p.map(p.sin(p.frameCount ), -1,1,50,255);
    p.g = p.map(p.sin(p.frameCount / 4 ), -1,1,50,255);
    p.b = p.map(p.sin(p.frameCount  / 2), -1,1,50,255);
    
    p.counter += 15;
  
    p.noFill();
    p.stroke(p.r,p.g,p.b);
    p.strokeWeight(1);
    
    // Generates i number of circles
    for(var i = 0; i < p.numOfshapes.value(); i++){
  
      // create a custom shape depending on amount of vertices 
      p.beginShape();
      //Creating circle shape using the sin and cos rule
      for(var j = 0; j < 360; j+= p.shape.value()){
        p.rotateZ(p.cos(p.frameCount + i ) * p.roationSpeed.value() / 100);
      //create size between each line
      p.rad = i * 8;
      //Bends vertrices around the cos and sin rule to create a circle 
      p.x = p.rad * p.cos(j);
      p.y = p.rad * p.sin(j);
      
      //movement of the shape on the z axis
      // speed, time between each circle, movment of whole shape (13 20 10) basic
      p.z = (p.sin(p.frameCount * p.speed.value() + i * p.delay.value()) * p.height.value());
      
      p.vertex(p.x,p.y,p.z);
  
    }
      p.endShape(p.CLOSE);
    }
    
  }
  }
  var myp5 = new p5(sketchThree, 'squares');
  