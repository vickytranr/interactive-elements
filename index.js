var canvas;
var ctx;
var w = window.innerWidth;;
var h = window.innerHeight;
var allCirc = [];
document.querySelector("#myCanvas").onmousemove = move;
setUpCanvas();
animationLoop();
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
function move(event){
  addObjectWithLocation(allCirc, event.offsetX, event.offsetY);
  // moveChange;
}
// function moveChange(event){
//     a.c = 100+event.offsetX/5;
//     a.c = 100+event.offsetY/5;
// }
//object editing
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
function clear(){
  ctx.clearRect(0,0,w,h);
}
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
function turn(o, angle){
  if(angle != undefined){
      o.changle = angle;
  };
  o.angle += o.changle;
}
function forward(o,d){
  var changeX;
  var changeY;
  var oneDegree = Math.PI/180; // 2*Math.PI/360
  if(d != undefined){
      o.d = d;
  };
  changeX = o.d*Math.cos(o.angle*oneDegree);
  changeY = o.d*Math.sin(o.angle*oneDegree);
  o.x += changeX;
  o.y += changeY;
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
  // ctx.stroke();
}
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
function setUpCanvas(){
  canvas = document.querySelector("#myCanvas");
  ctx = canvas.getContext("2d");
  canvas.width = w;
  canvas.height = h;
}
 
 
 

