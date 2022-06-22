var canvas;
var ctx;
var w = window.innerWidth;;
var h = window.innerHeight;
var o1 = {
    "x": w/2,
    "y": h/2,
    "w": 50,
    "h": 60,
    "c": 360,
    "a": 1,
    "sideLength": 40,
    "d": 10,
    "angle": randn(360),
    "changle": 15,
}
setUpCanvas();
heart(o1);

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
    canvas.style.border = "2px solid black";
 }