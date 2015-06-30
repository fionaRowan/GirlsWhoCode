// Fiona Rowan
// GWC Summer Immersion Program
// Project prompt: write code that randomly generates an image of 
// a fish tank (using khan academy template below)
// https://www.khanacademy.org/computing/computer-programming/programming/functions/p/project-fish-tank



background(89, 216, 255);


//fish variables
var centerX = random(150,300);
var centerY = random(100,200);
var bodyLength = random(100,200);
var bodyHeight = random(50,150);
var bodyColor = color(random(0,162), random(0,200), random(0,255));



//kelp variables
var kX = random(150,300);
var kY = random(200,300);
var kLength = random(10,50);
var kHeight = random(200,300);
var kColor = color(random(0,162),random(0,200),random(0,255));

var drawFish = function( x, y, l, h, c){
    
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5,          bodyHeight/5);
       
};

noStroke();
fill(bodyColor);

drawFish(centerX, centerY, bodyLength, bodyHeight, bodyColor);

var drawKelp = function( x, y, l, h, c){
    // body
    ellipse(kX, kY, kLength, kHeight);
      
};

noStroke();
fill(kColor);

drawKelp(kX, kY, kLength, kHeight, kColor);


//draw starfish 
var angle = 0; 
var sX = 0;
var sY = 0;
var sLength = random(10,40);
var sHeight = random(100,200);
var sColor = color(random(0,162),random(0,200),random(0,255));
var transX = random(1,4);
var transY = random(1,4); 


var drawStarfish = function( x, y, l, h, c){
    
    translate(width/transX, height/transY);
    for(var i = 0; i<3; i++){
        rotate(angle); 
        ellipse(x, y, l, h);
        angle+=45;
    }
    translate(-(width/transX), -(height/transY));
    rotate(225);
    
       
};

noStroke();
fill(sColor);
drawStarfish(sX,sY,sLength, sHeight, sColor);


//fish bubbles

var bX=-300;
var bY = 100;
fill(247, 244, 247);
draw = function() {
    ellipse(bX, bY, 30, 30);
    bX+= 70;
    ellipse(bX, bY, 30, 30);
    bY+=70;
};







         
         