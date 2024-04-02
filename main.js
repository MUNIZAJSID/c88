var mouseEvent = "empty";

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
widthOfLine = 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("widthOfLine").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";

    canvas.addEventListener("mousemove", my_mousemove);
    canvas.addEventListener("mouseup", my_mouseup);
    canvas.addEventListener("mouseleave", my_mouseleave);
}

function my_mousemove(e)
{
    currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
    currentPositionOfMouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        console.log("Posição atual das coordenadas x e y= ");
        console.log("x  = " + currentPositionOfMouseX + "y = " + currentPositionOfMouseY);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.arc(currentPositionOfMouseX, currentPositionOfMouseY, radius ,0 , 2 * Math.PI);
        ctx.stroke();
    }
}

function my_mouseup(e) {
    mouseEvent = "mouseUP";
}

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}