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



































//   x+=2;
//   y+=2;
// 	a-=2;
// 	b-=2;
// 	strokeWeight(1);
//   translate(width/2, height/2);
//   for(var i=0;i<15;i++){
// 	  for(var k=0;k<20;k++){
// 		stroke(255,255,255);
//     rotate(PI / 12.0);
// 	  fill(255,255-i*10,255-k*10);
//   	line(a%100,b%100,x%300,y%300);
// 	  ellipse((x+i*20)%width,(y+k*20)%height,i+4,i+4);
// 		drawtriangle((a-i*20)%width,(b-k*20)%height,k/8);
// 		rect(x%width, y%height, k+10, k+10);
// 		fill(0,i*10,255-k*10);
// 		ellipse((x-i*20)%width,(y-k*20)%height,i+3,i+3);
// 		rotate(PI / 24.0);
// 		fill(255-(i+k)*5,(i+k)*7,i*20);
// 		drawtriangle((a+i*20)%width,(b+k*20)%height,k/8);
// 		rect(a%width, b%height, k+5, k+5);
// 		drawflower(k,x);
// 	  }
//   }

}

function drawtriangle(x,y,r){
	triangle(x, y, x+7*r, y-13.75*r, x+14*r, y);
}

function drawflower(i,k){
		if(i%2==1){
			fill(255,(k*0.4)%255,30);
			stroke(k%255,255,0);
			arc(0,0,150+i+150*sin(k*PI/24),150,0,PI / 40);
		}
		else{
			fill(k%255,0,255);
			stroke(0,(k*0.4)%255,255);
			arc(0,0,(100+100*cos(k*PI/24))%255,50,0,PI / 20);
		}
}
