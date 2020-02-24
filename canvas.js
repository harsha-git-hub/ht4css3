//take avarible called canvas and fetch the elements canvas
var canvas=document.querySelector('canvas');

//set height and width dynamically of canvas

canvas.height=window.innerHeight;
canvas.width=window.innerWidth;

//create a object of canvas named c with method "getContext(2d)" with
//2d as parameter

var c=canvas.getContext('2d');

//draw a rectangle 

c.fillStyle=("yellow");
c.fillRect(100,100,200,100);//X,Y ,width,height

//draw a rectanle with border

c.fillStyle=("yellow");
c.strokeRect(200,200,200,150);//gives border
c.fillRect(200,200,200,150);//X,Y ,width,height

//draw a line 

c.beginPath()
c.moveTo(300,100);//starting point x,y
c.lineTo(500,100);//ending point x,y
c.lineTo(500,300);//ending point x,y
c.stroke();//join the above to point made

//draw an arc
c.beginPath();
c.arc(600,100,30,0,Math.PI*2,false);//x,y,radius,start
//angle,endangle,false draw it anti clockwise
c.strokeStyle="blue";
c.stroke();
