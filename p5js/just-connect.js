
// 
// LEARN 
// -- nested matrices? push() - push() - pop() - pop()
// 


function setup() {
	createCanvas(windowWidth, 2 * windowHeight);
}

	var 
		hGap = 0,
		vGap = 0,
		roundedCornerDf = 10,
		roundedCornerDf2 = 3,		
		roundedCornerMax = 100,		

		xLeft = 50, yTop = 150,
		jHeight1 = 240,
		jHeight2 = 120,
		lineHeight = jHeight1 + vGap + jHeight2,
		jDescenderX = 37,
		jDescenderY = yTop + lineHeight / 3,
		jDescenderWidth = jDescenderX,
		jDescenderHeight = (2/3) * lineHeight,
		jDotY = 0.5 * jDescenderWidth,
		jDotHeight = 90,

		letterWidth = 260,
		
		uStrokeWidth = (letterWidth - hGap) / 2,
		gutter = 2.75 * hGap,
		uX= xLeft + letterWidth + gutter,


		uWidth = uStrokeWidth + hGap + uStrokeWidth,

		sX = uX + uWidth + hGap,

		numCols = 21;


function grid(lineHeight2) {

	// letter-construction marks. a grid of sorts.

	stroke('rgba(135, 135, 135, 0.75)');
	strokeWeight(1);

	// J
 	line(xLeft, 0, xLeft, windowHeight);	
 	line(xLeft + letterWidth / 3, 0, xLeft + letterWidth / 3, windowHeight);
	line(xLeft + letterWidth, 0, xLeft + letterWidth, windowHeight);

	line(0, yTop, windowWidth, yTop);
	line(0, yTop + jHeight1 + vGap, windowWidth, yTop + jHeight1 + vGap);	
	line(0, jDescenderY, windowWidth, jDescenderY);
	line(0, yTop + lineHeight, windowWidth, yTop + lineHeight);	

	// U
	line(uX, 0, uX, windowHeight);
	line(uX + uStrokeWidth, 0, uX + uStrokeWidth, windowHeight);
	line(uX + uStrokeWidth + hGap, 0, uX + uStrokeWidth + hGap, windowHeight);
	line(uX + 2 * uStrokeWidth + hGap, 0, uX + 2 * uStrokeWidth + hGap, windowHeight);

	// S
	line(xLeft + 3 * letterWidth, 0, xLeft + 3 * letterWidth, windowHeight);

	// T
	line(xLeft + 4 * letterWidth, 0, xLeft + 4 * letterWidth, windowHeight);


	var colWidth = windowWidth / numCols;

	for (var i = 0; i < numCols; i++) {
		line(i * colWidth, windowHeight, i * colWidth, 2 * windowHeight);
	}

	line(0, windowHeight + yTop, windowWidth, windowHeight + yTop);
	line(0, windowHeight + yTop + (2/3) * lineHeight, windowWidth, windowHeight + yTop + (2/3) * lineHeight);	
	line(0, windowHeight + yTop + (1/3) * lineHeight2, windowWidth, windowHeight + yTop + (1/3) * lineHeight2);

	var miniGridHeight = (2/3) * lineHeight2;

	push();
	translate(0, windowHeight + yTop + (1/3) * lineHeight2);
	line(0, (1/3) * miniGridHeight, windowWidth, (1/3) * miniGridHeight);
	line(0, (2/3) * miniGridHeight, windowWidth, (2/3) * miniGridHeight);
	pop();

}

function drawJ() {
		
	// J
	stroke('darkviolet');
	fill('orange');
	// J - dot
// 	push();
// 	translate(xLeft + letterWidth - jDotHeight/2, yTop - jDotHeight/2);
// 	ellipse(0, 0, jDotHeight, jDotHeight);
// 	pop();

	
	push();
	translate(xLeft, yTop);
//  	rect(0, 0, letterWidth/2, jHeight1, roundedCornerDf, roundedCornerMax, roundedCornerDf, roundedCornerDf);
 	rect(letterWidth/3, 0, 2 * letterWidth / 3, jHeight1, roundedCornerMax, roundedCornerDf, roundedCornerDf, roundedCornerDf); 	
 	rect(letterWidth/3, jHeight1 + vGap, 2 * letterWidth / 3, jHeight2, roundedCornerDf, roundedCornerDf, roundedCornerMax, roundedCornerDf);
 	pop();

	// J - descender
	push();
	translate(xLeft, jDescenderY);
	rect(0, 0, letterWidth / 3, jDescenderHeight, roundedCornerDf, roundedCornerMax, roundedCornerDf, roundedCornerMax);
	pop();


}

function drawU() {
	
	stroke('darkviolet');
	fill('orange');

	// left stroke
	push();
	translate(uX, yTop);
 	rect(0, 0, uStrokeWidth, lineHeight, roundedCornerDf, roundedCornerMax, roundedCornerDf, roundedCornerMax);
 	pop();

	// right stroke
	push();
	translate(uX + uStrokeWidth + hGap, yTop);
 	rect(0, 0, uStrokeWidth, lineHeight, roundedCornerMax, roundedCornerDf, roundedCornerMax, roundedCornerDf);
 	pop();

}


function drawS() {

	stroke('darkviolet');
	fill('orange');

	push();
	translate(xLeft + letterWidth * 2 + gutter * 2 + (letterWidth - 2 * letterWidth / 3), yTop);
	rect(0, 0, 2 * letterWidth / 3, lineHeight - jDescenderHeight, roundedCornerDf, roundedCornerMax, roundedCornerDf, roundedCornerMax);
	pop();

	push();
	translate(xLeft + letterWidth * 2 + gutter * 2, jDescenderY);
	rect(0, 0, letterWidth, jDescenderHeight, roundedCornerMax, roundedCornerDf, roundedCornerMax, roundedCornerDf);
	pop();

}

function drawT() {

	stroke('darkviolet');
	fill('orange');

	push();
	translate(xLeft + 3 * letterWidth, yTop);
	rect(0, 0, letterWidth, (1/3) * lineHeight, roundedCornerDf, roundedCornerDf, roundedCornerMax, roundedCornerMax);
	pop();

	push();
	translate(xLeft + 3 * letterWidth + (1/6) * letterWidth, yTop + (1/3) * lineHeight);	
	rect(0, 0, (2/3) * letterWidth, (2/3) * lineHeight, roundedCornerDf, roundedCornerDf, roundedCornerDf, roundedCornerDf);
	pop();

}

function drawT2(letterWidth, lineHeight, xLeft, pos, windowNum) {

	stroke('darkviolet');
	fill('orange');

	push();
	translate(xLeft + (pos - 1) * letterWidth, (windowNum - 1) * windowHeight + yTop);
	rect(0, 0, (1/2) * letterWidth, lineHeight, roundedCornerDf, roundedCornerDf, roundedCornerDf, roundedCornerDf);
	pop();

	push();
	translate(xLeft + (pos - 1) * letterWidth + (1/2) * letterWidth, (windowNum - 1) * windowHeight + yTop);
	rect(0, 0, (1/2) * letterWidth, lineHeight, roundedCornerDf, roundedCornerDf, roundedCornerDf, roundedCornerDf);
	pop();


	stroke('darkviolet');
	fill('darkviolet');

	push();
	translate(xLeft + (pos - 1) * letterWidth, (windowNum - 1) * windowHeight + yTop + 1/3 * lineHeight);
	rect(0, 0, (1/3) * letterWidth, (2/3) * lineHeight, roundedCornerDf, roundedCornerMax, roundedCornerDf, roundedCornerDf);
	pop();

	push();
	translate(xLeft + (pos - 1) * letterWidth + (2/3) * letterWidth, (windowNum - 1) * windowHeight + yTop + 1/3 * lineHeight);
	rect(0, 0, (1/3) * letterWidth, (2/3) * lineHeight, roundedCornerMax, roundedCornerDf, roundedCornerDf, roundedCornerDf);
	pop();

}

function drawC(letterWidth, lineHeight, pos) {

	stroke('darkviolet');
	fill('orange');

	push();
	translate((pos - 1) * letterWidth, windowHeight + yTop);
	rect(0, 0, letterWidth, (1/3) * lineHeight, roundedCornerMax, roundedCornerDf2, roundedCornerMax, roundedCornerDf2);
	pop();

	var miniGridHeight = (2/3) * lineHeight;

	push();
	translate((pos - 1) * letterWidth, windowHeight + yTop + (1/3) * lineHeight);
// 	rect(0, (1/3) * miniGridHeight, letterWidth, (2/3) * miniGridHeight, roundedCornerDf2, roundedCornerMax, roundedCornerDf2, roundedCornerMax);
	rect(0, 0, letterWidth, miniGridHeight, roundedCornerDf2, roundedCornerMax, roundedCornerDf2, roundedCornerMax);
	pop();

}

function drawO (letterWidth, lineHeight) {
	
	stroke('darkviolet');
	fill('orange');

	push();
	translate(letterWidth, windowHeight + yTop);
	rect(0, 0, (1/2) * letterWidth, lineHeight, roundedCornerMax, roundedCornerDf2, roundedCornerDf2, roundedCornerMax);
	rect((1/2) * letterWidth, 0, (1/2) * letterWidth, lineHeight, roundedCornerDf2, roundedCornerDf2, roundedCornerMax, roundedCornerDf2);	
	pop();

}

function drawN (letterWidth, lineHeight, pos) {

	stroke('darkviolet');
	fill('orange');

	push();
	translate((pos - 1) * letterWidth, windowHeight + yTop);
	rect((1/3) * letterWidth, 0, (2/3) * letterWidth, lineHeight, roundedCornerDf2, roundedCornerMax, roundedCornerDf2, roundedCornerMax);

	stroke('darkviolet');
	fill('orange');

	rect(0, 0, (1/3) * letterWidth, lineHeight, roundedCornerMax, roundedCornerDf2);

	pop();
	
}

function drawE (letterWidth, lineHeight, pos) {

	stroke('darkviolet');
	fill('orange');

	push();
	translate((pos - 1) * letterWidth, windowHeight + yTop);
	rect(0, 0, letterWidth, (1/3) * lineHeight, roundedCornerMax, roundedCornerMax, roundedCornerDf2, roundedCornerDf2);
	pop();


	var hyperLocalLineHeight = ((2/3) * lineHeight);

	push();
	translate((pos - 1) * letterWidth, windowHeight + yTop + (1/3) * lineHeight);
	rect(0, 0, (2/3) * letterWidth, (1/3) * hyperLocalLineHeight, roundedCornerDf2, roundedCornerDf2, roundedCornerMax, roundedCornerDf2);
	rect(0, (1/3) * hyperLocalLineHeight, letterWidth, (2/3) * hyperLocalLineHeight, roundedCornerDf2, roundedCornerDf2, roundedCornerDf2, roundedCornerMax);
	pop();


}

function draw() {

	background('darkviolet');

	translate(0, 50);
// 	shearX(-PI/16);

	grid((2/3) * lineHeight);

	// J
	drawJ();
	
	// U
	drawU();

	// S 
	drawS();

	// T 
// 	drawT();
	drawT2(letterWidth, lineHeight, xLeft, pos=4, windowNum=1);	

	var colWidth = windowWidth / numCols;
	var magicNum = 3;
	var letterWidth2 = colWidth * magicNum;
	var lineHeight2 = (2/3) * lineHeight;

	// C
	drawC(letterWidth2, lineHeight2, pos=1);

	// O
	drawO(letterWidth2, lineHeight2);	

	// N
	drawN(letterWidth2, lineHeight2, pos=3);	

	// N
	drawN(letterWidth2, lineHeight2, pos=4);

	// E
	drawE(letterWidth2, lineHeight2, pos=5);

	// C
	drawC(letterWidth2, lineHeight2, pos=6);


	// T
	// using xLeft = 0 as function parameter below wreaks havoc !! it overrides the global xLeft
	// hence lonely 0
	// this is bc xLeft was already being used inside of drawT2
	drawT2(letterWidth2, lineHeight2, 0, pos=7, windowNum=2);

}