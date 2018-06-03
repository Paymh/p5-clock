class Clock {
    constructor() {
    }

    update() {
        //Convert to 12 hour time
	    let hours = hour();
	    if(hours > 12)
	    {
	    	hours -=12;
		}
		    
	    //Calculate angles
	    this.hourAngle = map(hours,0,12,0,360);
	    this.minuteAngle = map(minute(),0,60,0,360);
        this.secondAngle = map(second(),0,60,0,360);
    }

    draw() {
		//Rotate so draws from north rather then p5.js' default of east
		rotate(270);
		
        //Draw text
        this.drawText();
    
        //Draw tick points
        this.drawTicks();
    
        //Draw seconds
        this.drawSeconds();
    
        //Draw minutes
        this.drawMinutes();

        //Draw hours
        this.drawHours();
    }

    drawText() {
    	strokeWeight(1);
    	stroke(255,255,255);
    	textAlign(CENTER,CENTER);
    	noFill();

		//Draw numbers around clock
    	for(let i = 12; i > 0; i--) {
			push();
				//Rotate 90 degrees so text faces correct way
				rotate(90);
				
				//Work out where to put text
    			let angle = map(i,0,12,-90,270);
    			let x = cos(angle) * (maxDiameter/2 + 20);
    			let y = sin(angle) * (maxDiameter/2 + 20);
    			text(i,x,y);
    		pop();
    	}
    }

    drawTicks() {
    	stroke(255,255,255);
		strokeWeight(2);
    	for(let i = 0; i < 360; i+=360/60) {
    		let angle = i;
    		let x = cos(angle) * (maxDiameter/2+9);
    		let y = sin(angle) * (maxDiameter/2+9);
    		point(x,y);
    	}
    }

    drawSeconds() {
    	strokeWeight(strokeSize);
    	stroke(0,255,255);
    	arc(0,0,maxDiameter,maxDiameter,0,this.secondAngle);
    	push();
    		rotate(this.secondAngle);
    		line(0,0,maxDiameter/2.5,0);
    	pop();
    }

    drawMinutes() {
    	stroke(255,255,0);
    	arc(0,0,maxDiameter-strokeSize*3,maxDiameter-strokeSize*3,0,this.minuteAngle);
    	push();
    		rotate(this.minuteAngle);
    		line(0,0,maxDiameter/4,0);
    	pop();
    }

    drawHours() {
    	stroke(255,0,255);
    	arc(0,0,maxDiameter-strokeSize*6,maxDiameter-strokeSize*6,0,this.hourAngle);
    	push();
    		rotate(this.hourAngle);
    		line(0,0,maxDiameter/5,0);
    	pop();
    }
}