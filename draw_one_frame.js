var x=300;
var y=300;
var a=100;
var b=100;

let angle = 0;
let radius = 60;
let direction = 1;
let speed = 0.02;

function draw_one_frame(cur_frac) {
//   background(255);
noStroke()
let backgroundcolour = color("#49D49D")
fill(backgroundcolour)
rect (0,0,width, height)

let squiggleFrame = cur_frac

let mainColor = color('#558564')
let backupColor = color('#69EBD0')


let noiseColor = getNoiseValue(0, 0, 0.8, "noiseColor", 0, 1, 1)
let noiseyColor;

let circSize = width / 100
let spacingSize = width / 29



fill(mainColor)

for (let accross = 1; accross < width / spacingSize; accross ++)
	for (let down = 1; down +1 < height / spacingSize; down ++){

	noiseColor = getNoiseValue(spacingSize*accross, spacingSize*down, 0.8, "noiseColor", 0, 1, 400)

	noiseyColor = lerpColor(mainColor, backupColor, noiseColor)
	fill(noiseyColor)
	ellipse(spacingSize*accross, spacingSize*down, circSize)

	push();
	translate(0, 0);
	rotate(angle);
	// Draw the searchlight


	fill(255, 255, 0, 50);
	arc(spacingSize*accross, spacingSize*down, radius*5, radius*5, -PI/4, PI/4, PIE);
	pop();

	if (noiseColor >= 0.8){
		fill(225)
		ellipse(spacingSize*accross, spacingSize*down, circSize/2)
		
	}

}

push();
translate(width/2, height/2);
rotate(angle);
// Draw the searchlight


fill(255, 255, 0, 50);
arc(0, 0, radius*5, radius*5, -PI/4, PI/4, PIE);

fill(255, 255, 0, 100);
arc(0, 0, radius*3, radius*3, -PI/4, PI/4, PIE);

fill(255, 255, 0, 150);

arc(0, 0, radius*2, radius*2, -PI/4, PI/4, PIE);

fill(150);

ellipse(0,0, 60, 60)

pop();

// Update the angle of rotation
angle += direction * speed;
if (angle > PI/4 || angle < -PI/4) {
  direction *= -1;
}



}

