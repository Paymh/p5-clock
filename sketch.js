

let clock;

const maxDiameter = 400;
const strokeSize = 6;
let points = [];
let spacing = 7;

function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	clock = new Clock();
	//Generate random background based on 10PRINT
	let y = 0;
	while(y < height) {
		for(let x = 0; x < width; x+=spacing) {
			if(random(1) < 0.5) {
				points.push({x1:x,y1:y,x2:x+spacing,y2:y+spacing});
			} else {
				points.push({x1:x,y1:y+spacing,x2:x+spacing,y2:y});
			}
		}
		y+=spacing;
	}
}

function draw() {
	background(0);
	
	drawBackground();

	clock.update();
	clock.draw();
}

function drawBackground() {
	strokeWeight(1);
	for(let i = 0; i < points.length;i++) {
		line(points[i].x1,points[i].y1,points[i].x2,points[i].y2);
	}
	translate(width/2, height/2);
	push()
		fill(0,0,0);
		ellipse(0,0,maxDiameter+75,maxDiameter+75);
	pop();
} 