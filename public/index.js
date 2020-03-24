var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
 
var painting = document.getElementById('paint');
var paint_style = getComputedStyle(painting);
canvas.width = parseInt(paint_style.getPropertyValue('width'));
canvas.height = parseInt(paint_style.getPropertyValue('height'));

var mouse = {x: 0, y: 0};
 
canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);

ctx.lineWidth = 3;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = '#00CC99';
 
canvas.addEventListener('mousedown', function(e) {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
 
    canvas.addEventListener('mousemove', onPaint, false);
}, false);
 
canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);
 
var myDraw = []

const localDraw = JSON.parse(localStorage.getItem("myDraw"))

if(localDraw){
    loadDesenho(localDraw)
}

function loadDesenho(draw){
    for(let i = 0; i < draw.length; i++){
        ctx.lineTo(draw[i].x, draw[i].y)
        ctx.stroke();
    }
}

var onPaint = function() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
    myDraw.push({"x": mouse.x, "y": mouse.y})
    localStorage.setItem("myDraw", JSON.stringify(myDraw))
};
