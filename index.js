var canvas;
var ctx;
var w = window.innerWidth;;
var h = window.innerHeight;
var allCirc = [];

//I was much more comfortable just drawing from my previous knowledge of javascript, so I didn't use any jQuery!

document.querySelector("#myCanvas").onmousemove = move;

// CALLING FUNCTIONS
setUpCanvas();
animationLoop();

//ANIMATIONS
function animationLoop(){
  clear();
for(var i = 0; i<allCirc.length; i++){
  circle(allCirc[i]);
  forward(allCirc[i], 10)
  turn(allCirc[i],1);
  bounce(allCirc[i]);
}
  text();
  requestAnimationFrame(animationLoop);
}

//drawing from mouse position to generate circles
function move(event){
  addObjectWithLocation(allCirc, event.offsetX, event.offsetY);
}

//adding object to array
function addObjectWithLocation(a,x,y){
  a.push({
      "x": x,
      "y": y,
      "c": x/3,
      "a": 1,
      "d": 90,
      "angle": 270,
      "changle": 10,
      "r":y/10
  })
}

//FUNCTIONS

//allows circles to "bounce" off the edge of the canvas (essentially reflecting back)
function bounce(o){
if(o.x > w || o.x < 0){
  turn(o,180);
};
if(o.y > h || o.y < 0){
  turn(o,180);
}
}

function text() {
  ctx.font="100px gambado-sans-forte";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText("hover over me!", canvas.width/2, canvas.height/2);
}

//clears the canvas
function clear(){
  ctx.clearRect(0,0,w,h);
}
//allows circles to move forwaed
function forward(o,d){
  var changeX;
  var changeY;
  var oneDegree = Math.PI/180;
  if(d != undefined){
      o.d = d;
  };
  changeX = o.d*Math.cos(o.angle*oneDegree);
  changeY = o.d*Math.sin(o.angle*oneDegree);
  o.x += changeX;
  o.y += changeY;
}
//allows circles to turn based on an angle
function turn(o, angle){
  if(angle != undefined){
      o.changle = angle;
  };
  o.angle += o.changle;
}

// BASIC FUNCTIONS
function heart(o){
    ctx.beginPath();
    ctx.moveTo(o.x, o.y);
    ctx.lineTo(o.x+35, o.y+40);
    ctx.lineTo(o.x+70, o.y);
    ctx.bezierCurveTo(o.x+85,o.y-35,o.x+30,o.y-35,o.x+35,o.y-5);
    ctx.bezierCurveTo(o.x+35,o.y-35,o.x-15,o.y-35,o.x,o.y);
    ctx.fillStyle = "hsla("+o.c+", 100%, 50%, "+o.a+")";
    ctx.fill();
}
function circle(o){
  ctx.beginPath();
  ctx.arc(o.x,o.y,o.r,0,2*Math.PI);
  ctx.fillStyle = "hsla("+o.c+",100%,50%,"+o.a+")";
  ctx.fill();
}

//random functions
function randn(r){
  var result = Math.random()*r - r/2;
  return result
}
function randi(r){
  var result = Math.floor(Math.random()*r);
  return result
}
function rand(r){
  var result = Math.random()*r;
  return result
}

//canvas set up
function setUpCanvas(){
  canvas = document.querySelector("#myCanvas");
  ctx = canvas.getContext("2d");
  canvas.width = w;
  canvas.height = h;
}
 
 
 

