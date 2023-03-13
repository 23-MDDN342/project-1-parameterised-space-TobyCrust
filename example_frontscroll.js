let yoff = 0.0;
let particles = [];
const num = 1000;
const noiseScale = 0.015;
let speed = 4;


var r = 0;
var g = 0;
var b = 0;

function draw_one_frame(cur_frac) {


  strokeWeight(4);

  fill(0);
  rect(0,0, width, height, 10);
  
  
 
 
  for (let i = 0; i < num; i++){

    particles.push(createVector(random(width), random(height)));
  }

  stroke(5,2,255);
  

  for (let i = 0;  i < num; i++){
    let p = particles[i];
    point(p.x, p.y+height/3);
    let n = noise(p.y*noiseScale, p.x*noiseScale);
    let a = TAU * n; 
    p.x += cos(a)* speed;
    p.y += sin(a)*speed;

    if(!onScreen(p)){
      p.x = random(width);
      p.y = random(height);
    }
    function onScreen(v){
    return v.x >=0 && v.x <= width && v.y >=0 && v.y <= height;

    }

    // if(cur_frac <= 26){
    //   noiseSeed(millis());
    // }
  }


  
//----------------------------waves-------------------------------


fill(0, 0, 255, 50);
// We are going to draw a polygon out of the wave points
beginShape();

let xoff = 0; // Option #1: 2D Noise
// let xoff = yoff; // Option #2: 1D Noise

// Iterate over horizontal pixels
for (let x = 0; x <= width; x += 10) {
  // Calculate a y value according to noise, map to

  // Option #1: 2D Noise
  let y = map(noise(xoff, yoff), 0, 1, 200, 300);

  // Option #2: 1D Noise
  // let y = map(noise(xoff), 0, 1, 200,300);

  // Set the vertex
  vertex(x, y-height/7);
  // Increment x dimension for noise
  xoff += 0.05;
}
// increment y dimension for noise
yoff += 0.01;
vertex(width, height);
vertex(0, height);
endShape(CLOSE);
// }
}
