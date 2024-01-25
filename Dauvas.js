// U. Dammer. Version 1.8 Liestal  7.11.2020

/*
var xmax, ymax									// Canvasgrösse x von links nach rechts, y von oben nach unten
												// Bildschirmgrösse in Pixeln, Ursprung oben links
Rechtecke
fillRect(x1,y1,w,h)								// ausgefülltes Rechteck: x1,y1, width, height
rect(x1,y1,w,h)									// ohne Füllung, siehe setLineWidth
fillRectCenter(xM,yM,width,height)				// zentriertes, ausgefülltes Rechteck: x,y: Zentrum des Rechtecks
rectCenter(x,y,width,height)					// ohne Füllung, siehe setLineWidth
fillRectCenterRotate(x,y,width,height,angle);   // ...gedreht um Winkel alpha im Uhrzeigersinn in °
rectCenterRotate(x,y,width,height,angle);		// ...gedreht um Winkel alpha im Uhrzeigersinn in °
fillRectRotate(x,y,width,height,angle);			// gedreht um den unteren linken Eckpunkt
rectRotate(x,y,width,height,angle);				// gedreht um den unteren linken Eckpunkt

Dreiecke
fillTriangle(x1,y1,x2,y2,x3,y3)					// Allgemeines Dreieck aus 3 Punkte
triangle(x1,y1,x2,y2,x3,y3)						
fillEquiTriangle(x1,y1,a)						// gleichseitiges Dreieck (Grundseite in x-Richtung)
equiTriangle(x,y,a)
fillEquiTriangleCenter(x,y,a)					// gleichseitiges Dreieck, Mitte im Schwerpunkt (Grundseite in x-Richtung)
equiTriangleCenter(x,y,a)
fillIsoTriangle(x,y,a,h)						// gleichschenklig Basis a, Höhe h, Zentrum im Mittelpunkt der Grundlinie
isoTriangle(x,y,a,h)							
fillEquiTriangleRotate(x,y,a,alpha)				// alle Rotationen um den Schwerpunkt (im Uhrzeigersinn) in °
equiTriangleRotate(x,y,a,alpha)
fillIsoTriangleRotate(x,y,a,h,alpha)
isoTriangleRotate(x,y,a,h,alpha)
fillTriangleRotate(x1,y1,x2,y2,x3,y3,alpha)		// allgemeines Dreieck um den Schwerpunkt gedreht
triangleRotate(x1,y1,x2,y2,x3,y3,alpha)


Weitere Figuren						
line(x1,y1,x2,y2)								// von Punkt (x1,y1) nach  Punkt (x2,y2)
fillCircle(x,y,radius)							// Kreis
circle(x,y,radius)								// Kreisperipherie, siehe setLineWidth							
fillOval(x,y,rx,ry);							
oval(x,y,rx,ry);
fillOvalRotate(x,y,rx,ry,alpha);
ovalRotate(x,y,width,height,alpha)

drawText(x,y,text, size);
drawTextFont(x,y,text,size,font)
fillPoly(flatArray)								// Polygon e.g. [0,0,100,100,70,0]
poly(flatArray)

// Farbnamen siehe z.B. https://www.periodni.com/de/html_farbnamen.html
setFillColor(farbe)								// z.B. "FF2288" im Hex Format oder "blue"
setFillColorRGB(r,g,b)							// rot, grün, blau Werte von 0-255 				
setLineColor(farbe)								// für den Rand der Figuren
setLineColorRGB(r,g,b)		
setLineWidth(d)									// Linienbreite in Pixel
setBackgroundColorRGB(r,g,b)					// Hintergrund
setBackgroundColor(farbe)						// siehe auch http://tomheller.de/theholycymbal/html-farben.html
clearScreen()
setRandomFillColor()							// zufällige Füllfarbe
setRandomLineColor()							// zufällig Randfarbe
fullScreen();									// passt canvas dem Fenster an

Profidokumentation: https://www.w3schools.com/html/html5_canvas.asp and https://www.w3schools.com/tags/ref_canvas.asp
*/

var xmax,ymax; 									
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
xmax=window.innerWidth;							// globale Variable, Fensterbreite
ymax=window.innerHeight;						// globale Variable, Fensterhöhe
	
fullScreen();									// sorgt dafür, dass die Canvas das ganze Browserfenster ausfüllt


//Dreiecke ***************************************************************************
function fillTriangle(x1,y1,x2,y2,x3,y3){
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.lineTo(x3,y3);
	ctx.closePath();
	ctx.fill();
}

function triangle(x1,y1,x2,y2,x3,y3){
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.lineTo(x3,y3);
	ctx.closePath();
	ctx.stroke();
}

function fillEquiTriangle(x,y,a){
	fillTriangle(x,y,x+a,y,x+a/2, y-Math.sqrt(3)*a/2);
}

function equiTriangle(x,y,a){
	triangle(x,y,x+a,y,x+a/2, y-Math.sqrt(3)*a/2);
}

function fillEquiTriangleCenter(x,y,a){	
	fillTriangle(x-a/2,y+Math.sqrt(3)*a/6,x+a/2,y+Math.sqrt(3)*a/6,x, y-Math.sqrt(3)*a/3);
}

function equiTriangleCenter(x,y,a){
	triangle(x-a/2,y+Math.sqrt(3)*a/6,x+a/2,y+Math.sqrt(3)*a/6,x, y-Math.sqrt(3)*a/3);
}

function fillEquiTriangleRotate(x,y,a,alpha){	
	fillTriangleRotate(x-a/2,y+Math.sqrt(3)*a/6,x+a/2,y+Math.sqrt(3)*a/6,x, y-Math.sqrt(3)*a/3,alpha);
}

function equiTriangleRotate(x,y,a,alpha){
	triangleRotate(x-a/2,y+Math.sqrt(3)*a/6,x+a/2,y+Math.sqrt(3)*a/6,x, y-Math.sqrt(3)*a/3,alpha);
}

function isoTriangle(x,y,a,h){
	triangle(x-0.5*a, y, x+0.5*a, y,x,y-h);
}

function fillIsoTriangle(x,y,a,h){
	fillTriangle(x-0.5*a, y, x+0.5*a, y,x,y-h);
}

function isoTriangleRotate(x,y,a,h,alpha){
	triangleRotate(x-0.5*a, y, x+0.5*a, y,x,y-h,alpha);
}

function fillIsoTriangleRotate(x,y,a,h,alpha){
	fillTriangleRotate(x-0.5*a, y, x+0.5*a, y,x,y-h,alpha);
}

function triangleRotate(x1,y1,x2,y2,x3,y3,alpha){		//rotiert um den Schwerpunkt
	var xs=(x1+x2+x3)/3;
	var ys=(y1+y2+y3)/3;
	var x1s=x1-xs, x2s=x2-xs, x3s=x3-xs; //Koordinaten bzg. Schwerpunkt
	var y1s=y1-ys, y2s=y2-ys, y3s=y3-ys; //Koordinaten bzg. Schwerpunkt
	var alph=alpha*Math.PI/180; 
	var x1srot=Math.cos(alph)*x1s-Math.sin(alph)*y1s; //Anwendung Drehmatrix
	var y1srot=Math.sin(alph)*x1s+Math.cos(alph)*y1s;
	var x2srot=Math.cos(alph)*x2s-Math.sin(alph)*y2s;
	var y2srot=Math.sin(alph)*x2s+Math.cos(alph)*y2s;
	var x3srot=Math.cos(alph)*x3s-Math.sin(alph)*y3s;
	var y3srot=Math.sin(alph)*x3s+Math.cos(alph)*y3s;
	var x1rot=x1srot+xs, x2rot=x2srot+xs, x3rot=x3srot+xs; //Koordinaten der neuen Punkte
	var y1rot=y1srot+ys, y2rot=y2srot+ys, y3rot=y3srot+ys;
	ctx.beginPath();
	ctx.moveTo(x1rot,y1rot);
	ctx.lineTo(x2rot,y2rot);
	ctx.lineTo(x3rot,y3rot);
	ctx.closePath();
	ctx.stroke();
}

function fillTriangleRotate(x1,y1,x2,y2,x3,y3,alpha){		//rotiert um den Schwerpunkt
	var xs=(x1+x2+x3)/3;
	var ys=(y1+y2+y3)/3;
	var x1s=x1-xs, x2s=x2-xs, x3s=x3-xs; //Koordinaten bzg. Schwerpunkt
	var y1s=y1-ys, y2s=y2-ys, y3s=y3-ys; //Koordinaten bzg. Schwerpunkt
	var alph=alpha*Math.PI/180; 
	var x1srot=Math.cos(alph)*x1s-Math.sin(alph)*y1s; //Anwendung Drehmatrix
	var y1srot=Math.sin(alph)*x1s+Math.cos(alph)*y1s;
	var x2srot=Math.cos(alph)*x2s-Math.sin(alph)*y2s;
	var y2srot=Math.sin(alph)*x2s+Math.cos(alph)*y2s;
	var x3srot=Math.cos(alph)*x3s-Math.sin(alph)*y3s;
	var y3srot=Math.sin(alph)*x3s+Math.cos(alph)*y3s;
	var x1rot=x1srot+xs, x2rot=x2srot+xs, x3rot=x3srot+xs; //Koordinaten der neuen Punkte
	var y1rot=y1srot+ys, y2rot=y2srot+ys, y3rot=y3srot+ys;
	ctx.beginPath();
	ctx.moveTo(x1rot,y1rot);
	ctx.lineTo(x2rot,y2rot);
	ctx.lineTo(x3rot,y3rot);
	ctx.closePath();
	ctx.fill();
}

//Rechtecke *****************************************************************************
function fillRect(x1,y1,w,h){						// Mitte, Breite, Höhe
	ctx.fillRect(x1,y1,w,h);
}

function fillRectCenterRotate(x,y,width,height,alpha){						
	ctx.save();
	ctx.translate(x,y);	
	ctx.rotate(alpha*Math.PI/180);
	ctx.fillRect(-width/2,-height/2,width, height);
	ctx.restore();
}

function fillRectRotate(x,y,width,height,alpha){						
	ctx.save();
	ctx.translate(x,y);	
	ctx.rotate(alpha*Math.PI/180);
	ctx.fillRect(0,0,width, height);
	ctx.restore();
}

function rectCenterRotate(x,y,width,height,alpha){						
	ctx.save();
	ctx.translate(x,y);	
	ctx.rotate(alpha*Math.PI/180);
	ctx.strokeRect(-width/2,-height/2,width, height);
	ctx.restore();
}

function rectRotate(x,y,width,height,alpha){										
	ctx.save();
	ctx.translate(x, y);	
	ctx.rotate(alpha*Math.PI/180);
	//ctx.strokeRect(-width/2,-height/2,width, height);
	ctx.strokeRect(0,0,width, height);
	ctx.restore();
}

function rect(x1,y1,w,h){						// Mitte, Breite, Höhe
	ctx.strokeRect(x1,y1,w,h);
	ctx.stroke();
}

function rectCenter(x,y,width,height){						// Mitte, Breite, Höhe
	rect(x-0.5*width, y-0.5*height,width, height);
}

function fillRectCenter(x,y,width,height){						// Mitte, Breite, Höhe
	ctx.fillRect(x-0.5*width, y-0.5*height,width, height);
}

//Farben und Style******************************************************************************
function setFillColor(farbe){
	ctx.fillStyle = farbe;
}

function setLineColor(farbe){
	ctx.strokeStyle =farbe;
}

function setLineWidth(d){
	ctx.lineWidth=d;
}

function setFillColorRGB(r,g,b){
	var farbe="rgb("+r+","+g+","+b+")";
	ctx.fillStyle = farbe;
	}
	
function setLineColorRGB(r,g,b){
	var farbe="rgb("+r+","+g+","+b+")";
	ctx.strokeStyle =farbe;
    ctx.stroke();
	}

function setBackgroundColorRGB(r,g,b){
	document.getElementById("myCanvas").style.backgroundColor = "rgb("+r+","+g+","+b+")";
	}
 
function setBackgroundColor(farbe){
	document.getElementById("myCanvas").style.backgroundColor =farbe;
}

function setRandomFillColor(){
	setFillColorRGB(Math.random()*256,Math.random()*256,Math.random()*256);
}

function setRandomLineColor() {
	var r=Math.random()*256,  g=Math.random()*256, b=Math.random()*256;
	var farbe="rgb("+r+","+g+","+b+")";
	ctx.strokeStyle =farbe;
    ctx.stroke();
}

// Weitere Figuren *************************************************************************************	
function line(x1,y1,x2,y2){
	ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function fillCircle(x,y,a){
	ctx.beginPath();
	ctx.arc(x,y,a,0,Math.PI*2,true);
	ctx.closePath();
	ctx.fill();
}

function circle(x,y,a){
	ctx.beginPath();
	ctx.arc(x,y,a,0,Math.PI*2,true);
	ctx.closePath();
	ctx.stroke();
}

function drawText(x,y,text,a){
	ctx.font=a+"px Georgia";
	ctx.fillText(text,x,y);
}

function drawTextFont(x,y,text,a,font){
	ctx.font=a+"px "+font;
	ctx.fillText(text,x,y);
}

function fillOval(x,y,rx,ry){
      ctx.save();
      ctx.translate(x,y);
      ctx.scale(1,ry/rx);
      ctx.beginPath();
      ctx.arc(0, 0, rx, 0, 2 * Math.PI, false);
      ctx.restore();
      ctx.fill();     
}
 
 function oval(x,y,rx,ry){
      ctx.save();
      ctx.translate(x,y);
      ctx.scale(1,ry/rx);
      ctx.beginPath();
      ctx.arc(0, 0, rx, 0, 2 * Math.PI, false);
      ctx.restore();
      ctx.stroke();
}

function fillOvalRotate(x,y,width,height,alpha){						
	ctx.save();
	ctx.translate(x,y);	
	ctx.scale(1,ry/rx);
	ctx.rotate(alpha*Math.PI/180);
	ctx.beginPath();
    ctx.arc(0, 0, rx, 0, 2 * Math.PI, false);
	ctx.restore();
}

function ovalRotate(x,y,rx,ry,alpha){						
	ctx.save();
	ctx.translate(x,y);	
	ctx.rotate(alpha*Math.PI/180);
	ctx.scale(1,ry/rx);
    ctx.arc(0, 0, rx, 0, 2 * Math.PI, false);
	ctx.restore();
	ctx.stroke();
}

function fillOvalRotate(x,y,rx,ry,alpha){
      ctx.save();
      ctx.translate(x,y);
	  ctx.rotate(alpha*Math.PI/180);
      ctx.scale(1,ry/rx);
      ctx.beginPath();
      ctx.arc(0, 0, rx, 0, 2 * Math.PI, false);
      ctx.restore();
      ctx.fill();     
}

function fillPoly(flatArray){		// e.g. [0,0,100,100,50,0]
	// copy array
	var shape = flatArray.slice(0);
	ctx.beginPath();
	ctx.moveTo(shape.shift(), shape.shift());
	while(shape.length) {
	  ctx.lineTo(shape.shift(), shape.shift());
	}
	ctx.closePath();
	ctx.fill();
}

function poly(flatArray){		// e.g. [0,0,100,100,50,0]
	// copy array
	var shape = flatArray.slice(0);
	ctx.beginPath();
	ctx.moveTo(shape.shift(), shape.shift());
	while(shape.length) {
	  ctx.lineTo(shape.shift(), shape.shift());
	}
	ctx.closePath();
	ctx.stroke();
}

// Bildschirm ******************************************************************************************
function clearScreen(){
	ctx.clearRect(0,0,xmax,ymax);
}

function fullScreen(){
	xmax=window.innerWidth;
	ctx.canvas.width=xmax;
	ymax=window.innerHeight;
	ctx.canvas.height=ymax;
}

//für den wait Befehl nötig, siehe DauvasSleepy.js
const sleep=(delay) => new Promise((resolve) => setTimeout(resolve, delay));



/*
// Maus und Canvas
c.addEventListener('mousedown',function(evt){setDot(evt)},false);
//c.addEventListener('mousemove',function(evt){setDot(evt)},false);

			
			
			function setDot(evt){
				var mousePos=getMousePos(c,evt);
				circle(mousePos.x, mousePos.y,10);
			}
			function getMousePos(c,evt){
				var rect=c.getBoundingClientRect();
				return {								//Objekt zur Parameterübergabe
				x:evt.clientX-rect.left,
				y:evt.clientY-rect.top
				};
			}
*/

/* Tastatur und Canvas
im html: document.addEventListener("keydown", doKeyDown, false);
im js:
function doKeyDown(evt){
	var key=evt.keyCode;
	console.log(key);
	if(key==37)
		john.left(10);
}



ggf. auch mit jquery
src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
$(document).keydown(onKeyDown);		
$(document).keyup(onKeyUp);
			
function onKeyDown(evt){
	console.log(evt.keyCode);
}

function onKeyUp(evt){
	console.log(evt.keyCode);
}

*/


