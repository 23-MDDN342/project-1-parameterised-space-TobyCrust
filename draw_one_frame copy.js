var x=300;
var y=300;
var a=100;
var b=100;

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

let circSize = width / 60
let spacingSize = width / 59



fill(mainColor)

for (let accross = 1; accross < width / spacingSize; accross ++)
	for (let down = 1; down +1 < height / spacingSize; down ++){

	noiseColor = getNoiseValue(spacingSize*accross, spacingSize*down, 0.8, "noiseColor", 0, 1, 100)

	noiseyColor = lerpColor(mainColor, backupColor, noiseColor)
	fill(noiseyColor)
	ellipse(spacingSize*accross, spacingSize*down, circSize)
	if (noiseColor >= 0.8){
		fill(225)
		ellipse(spacingSize*accross, spacingSize*down, circSize/2)
	}

}

}

