var mouseEvent="empty";
var last_position_of_x,last_position_of_y;

canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d");
colour=black;
width_of_line=1;

canvas.addEventListner("mousedown",my_mousedown);

function my_mousedown()
{
    colour=document.getElementById("colour").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent="mouseDown";
}

canvas.addEventListner("mousemove",my_mousemove);

function my_mousemove()
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle=colour;
        ctx.lineWidtth=width_of_line;

        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y
}
canvas.addEventListner("mouseup",my_mouseup);
function my_mouseup(e)
{
mouseEvent = "mouseUP";
}
 canvas.addEventListener("mouseleave", my_mouseleave);
 function my_mouseleave(e)
{
 mouseEvent = "mouseleave";
} //Additional Activity 
function clearArea() 
{
 ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
 }