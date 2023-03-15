let yoff = 0.0;
let particles = [];
var num = 1000;
const noiseScale = 0.015;
let speed = 3; // speed particals are moving
let timer = 0;
let counter = 100;
let strokeSize = 4;

var r = 0;
var g = 0;
var b = 0;


function draw_one_frame(cur_frac) {
  noiseSeed(timer);
  

  setInterval(incrementCounter, 1000);
  strokeWeight(strokeSize);

  fill(0);
  rect(0,0, width, height, 10);
  fill(250);
  text(counter, 50, 50);
  
 timer += 0.01;

 if(canvasWidth <= 960){
 num = 1000;
 strokeSize = 4;

 }

 if(canvasWidth >= 1919){
  num = 1500;
  strokeSize = 6;

 }

 
 if(canvasWidth >= 2250){
  num = 2000;
  strokeSize = 8;

 }

 if(counter <= 100){
  timer -= 100;
 }

 function incrementCounter() {
  counter++;
}
 
  for (let i = 0; i < num; i++){

    particles.push(createVector(random(width), random(height)));
  }

  stroke(5,2,255);


  for (let i = 0;  i < num; i++){ // p = point
    let p = particles[i];
    point(p.x, p.y+height/3);
    let n = noise(p.y*noiseScale, p.x*noiseScale);
    let a = TAU * n;  //TAU is 2pi
    p.x += cos(a)* speed;
    p.y += sin(a)*speed;

    if(!onScreen(p)){  // this recognises if the points are off screen and respawns them inside of the canvas at a random location
      p.x = random(width);
      p.y = random(height);
    }
    function onScreen(v){ // applys a 
    return v.x >=0 && v.x <= width && v.y >=0 && v.y <= height; 
    

    }

    // if(cur_frac <= 26){
    //   noiseSeed(millis());
    // }
  }


  
//----------------------------waves-------------------------------


fill(0, 0, 255, 50);
//draw a polygon out of the wave points
beginShape();

let xoff = 0; // Option #1: 2D Noise
// let xoff = yoff; // Option #2: 1D Noise

// Iterate over horizontal pixels
for (let x = 0; x <= width; x += 10) {
  // Calculate a y value according to noise, map to

  // Option #1: 2D Noise
  //let y = map(noise(xoff, yoff), 0, 1, 200, 300); // variation in wave height
let y = getNoiseValue(x, yoff, cur_frac/5 ,"wavey", height / 2.5, height/ 2,300)

  // Option #2: 1D Noise
  // let y = map(noise(xoff), 0, 1, 200,300);

  // Set the vertex
  vertex(x, y-height/7);
  // Increment x dimension for noise
  xoff += 0.05;
}
// increment y dimension for noise
yoff += 0.01; //how fast the wave is moving 
vertex(width, height);
vertex(0, height); // sets the box of the drawn waves
endShape(CLOSE);
// }

//it's going to be hard to have yoff not change when the size of the canvis is differnet because it will be hard to get it in relation to height.
}
