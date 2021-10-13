canvas=document.getElementById("my_canvas");
var ctx=canvas.getContext("2d");
var color="red";
ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth=4;
ctx.arc(150, 143, 430, 300, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=4;
ctx.arc(250, 210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=4;
ctx.arc(350, 210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=4;
ctx.arc(450, 210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=4;
ctx.arc(300, 250, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=4;
ctx.arc(400, 250, 40, 0, 2*Math.PI);
ctx.stroke();





canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;
console.log("x="+mouse_x+"y="+mouse_y);
circle(mouse_x, mouse_y)
}
function circle(mouse_x, mouse_y){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
ctx.stroke();
}