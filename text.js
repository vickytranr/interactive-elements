var canvas;
var ctx;
var w = window.innerWidth;
var h = window.innerHeight;
var i = 0;
var canvasPos = getPosition(canvas);
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
document.querySelector("#myCanvas").onclick = click;
document.onkeydown = move;
document.querySelector("#myCanvas").onmousemove = moveChange;

setUpCanvas();
animationLoop();

function animationLoop(){
    rect(o1);
    requestAnimationFrame(animationLoop);
}

// USER INTERACTION

function moveChange(event){
    o1.c = event.offsetX;
    o1.c = event.offsetY;
}

function move(event){
    if(event.keyCode == 37){
        turn(o1, -10);
    };
    if(event.keyCode == 39){
        turn(o1, 10);
    console.log("move", event.keyCode)
    }
}

    ////// attempting to do onclick method for shape rotation
        function click(event){
            i++;
        if(i%2 != 0){
            rotationLoop();
        };
        if(i%2 == 0){
            clear();
        }
            console.log(i);
        }

        function rotationLoop(){
            clear();
            octagon(o1);
            turn(o1, 20);
            requestAnimationFrame(rotationLoop);
        }


// DRAW SHAPE
var mouseX = 0;
var mouseY = 0;
 
canvas.addEventListener("mousemove", setMousePosition, false);
 
function setMousePosition(e) {
    mouseX = e.clientX - canvasPos.x;
    mouseY = e.clientY - canvasPos.y;
}     
function setMousePosition(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }    
 

function rect(o){
    // var ob = o; // CAN'T DO THIS
    // console.log(o.x, o.y);

    ctx.beginPath();
  ctx.arc(o.x,o.y,o.r,0,2*Math.PI);
  ctx.fillStyle = "hsla("+o.c+",100%,50%,"+o.a+")";
  ctx.fill();

    o.x = mouseX;
    o.y = mouseY;

    // o = ob;
    // console.log(o.x,o.y);
}

function getPosition(el) {
    var xPosition = 0;
    var yPosition = 0;
   
    while (el) {
      xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
      el = el.offsetParent;
    }
    return {
      x: xPosition,
      y: yPosition
    };
  }       


function octagon(o){
    var x = o.x;
    var y = o.y;
    var a = o.angle;
    var d = o.d;


    ctx.beginPath();
    ctx.moveTo(o.x,o.y);
    for(var i = 0; i<8; i++){
    forward(o, o.sideLength);
    ctx.lineTo(o.x,o.y);
    turn(o, 45);
    ctx.stroke();
    ctx.fillStyle = "hsla("+o.c+",100%,50%,"+o.a+")";
    ctx.fill();
    }
    o.x = x;
    o.y = y;
    o.angle = a;
    o.d = d;
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
    var oneDegree = Math.PI/180;
    if(d != undefined){
        o.d = d;
    };
    changeX = o.d*Math.cos(o.angle*oneDegree);
    changeY = o.d*Math.sin(o.angle*oneDegree);
    o.x += changeX;
    o.y += changeY;
}

function bound(o){
    if(o.x > w || o.x < 0){
        o.d *= -1;
    };
    if(o.y > h || o.y < 0){
        o.d *= -1;
    }
 }

// RANDOM FUNCTIONS

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

function clear(){
    ctx.clearRect(0,0,w,h);
}

function setUpCanvas(){
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "2px solid green";
}

console.log("module 9 exercise");