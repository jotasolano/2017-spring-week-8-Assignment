console.log(d3);

//Part 1: Append a <canvas> element under <div id='plot1'> with the same width and height as the container element
//Store drawing context as a variable
//Hint: use canvas.getContext('2d');

var width = d3.select('.plot').node().clientWidth,
	height = d3.select('.plot').node().clientHeight;

var canvas = d3.select('#plot1').append('canvas')
	.attr('width', width)
	.attr('height', height)
	.node();

var cx = canvas.getContext('2d');

// cx.translate(0, 10); ???


//Part 2: Draw a gray background, with fillStyle = 'rgb(250,250,250)'
cx.fillStyle = 'rgb(250,250,250)';
cx.fillRect(0, 0, width, height);

//Part 3: Draw a x and y grid, spaced 50px apart, with strokeStyle = 'rgb(180,180,180)'
//Hint: use context2D.beginPath and context2D path commands within two for... loops
function grid(){
	cx.strokeStyle = 'rgb(180, 180, 180)';
	cx.lineWidth = 0.5;

	for (var i = 50; i <= width; i += 50){ // vertical lines
		cx.beginPath();
		cx.moveTo(i,0);
		cx.lineTo(i,height);
		cx.closePath();
		cx.stroke();
	}
	for (var i = 50; i <= width; i += 50){ // horizontal lines
		cx.beginPath();
		cx.moveTo(0,i);
		cx.lineTo(width,i);
		cx.closePath();
		cx.stroke();
	}
}

grid();

//Part 4: Draw a filled red rectangle at (50,50), with width = 50 and height = 50
//Draw a rectangle with red border at (150,50), with width = 50 and height = 50
//Hint: use context2D.fillRect and context2D.strokeRect

// red filled rect
cx.fillStyle = 'rgb(255, 0, 0)';
cx.fillRect(50, 50, 50, 50);

// red outlined rect
cx.strokeStyle = 'rgb(255, 0, 0)';
cx.strokeRect(150, 50, 50, 50);


// Part 5: Draw a series of circles and lines using the context2D path commands, as shown

var cirY = 200,
	cirX = [100, 400, 700]

cx.beginPath();
cx.arc(cirX[1], cirY, 50, 0, Math.PI*2); // (x, y, r, startAngle, endAngle [,direction])
cx.stroke();

cx.beginPath();
cx.arc(cirX[2], cirY, 50, 0, Math.PI*2); // (x, y, r, startAngle, endAngle [,direction])
cx.stroke();

cx.beginPath();
cx.arc(cirX[0], cirY, 50, 0, Math.PI*2); // (x, y, r, startAngle, endAngle [,direction])
cx.fillStyle = 'rgba(255, 0, 0, .5)';
cx.fill();

// the quadratic curves
cx.beginPath();
cx.moveTo(cirX[0], cirY);
cx.quadraticCurveTo(250, 100, cirX[1], cirY); //quadraticCurveTo(cpx,cpy,x,y)
cx.stroke();

cx.beginPath();
cx.moveTo(cirX[1], cirY);
cx.quadraticCurveTo(550, 300, cirX[2], cirY); //quadraticCurveTo(cpx,cpy,x,y)
cx.stroke();


// Part 6: Label each circle with coordinates
// Hint: context2D.fillText

cx.fillStyle = 'rgba(0, 0, 0, .5)';
cx.fillText("(100,200)",cirX[0],cirY);
cx.fillText("(400,200)",cirX[1],cirY);
cx.fillText("(700,200)",cirX[2],cirY);


// Part 7: append a new <canvas> element under <div id='plot2'>, and copy the content of the first canvas onto it

var canvas2 = d3.select('#plot2').append('canvas')
	.attr('width', width)
	.attr('height', height)
	.node();

var cx2 = canvas2.getContext('2d');
cx2.drawImage(canvas, 0, 0);


