let yoff = 0.0;
let particles = [];
var num = 0;
const noiseScale = 0.015;
let speed = 3 / 5; // speed particals are moving
let timer = 0 * 5;
let counter = 300;
let strokeSize = 4;
let daytimeC = 200;


const ease = new p5.Ease();

function draw_one_frame(cur_frac) {

  //--------------------------------------------gradient background--------------------------------------
  setGradient(0, 0, width, height, color(147, 0, 179), color(0, 0, 0), color(255, 0, 255));   // vertical gradient using three colors
  // fill(0);
  //   rect(0,0, width, height, 10);// rect background
  function setGradient(x, y, w, h, c1, c2, c3) {

    for (let i = y; i <= y + h; i++) {
      let inter1 = map(i, y, y + h, 0, 5);
      let inter2 = map(i, y, y + h, 0.5, 1);
      let inter3 = map(i, y, y + h, 0, 0.5); // change values to draw how far up it goes
      let c = lerpColor(lerpColor(c1, c2, inter1), c3, inter3);
      stroke(c);
      line(x, i, x + w, i);
    }

  }


  //---------------------------------------------points-----------------------------------------------

  // noiseSeed(timer/25);


  setInterval(incrementCounter, 1000);
  strokeWeight(strokeSize);


  fill(250);
  // text(counter, 50, 50);

  timer += 0.01;

  if (canvasWidth <= 960) {
    num = 1000;
    strokeSize = 4;
  }

  if (canvasWidth >= 1919) {
    num = 1500;
    strokeSize = 6;
  }


  if (canvasWidth >= 2250) {
    num = 2000;
    strokeSize = 8;
  }

  if (counter <= 100) {
    timer -= 10;
  }

  function incrementCounter() {
    counter++;
  }

  for (let i = 0; i < num; i++) {
    particles.push(createVector(random(width), random(height)));
  }

  stroke(0, 0, 255);// partical colour

  for (let i = 0; i < num; i++) { // p = point
    let p = particles[i];
    point(p.x, p.y + height / 3);
    let n = noise(p.y * noiseScale, p.x * noiseScale);
    let a = TAU * n;  //TAU is 2pi
    p.x += sin(a) * speed;
    p.y -= cos(a) * speed;

    if (!onScreen(p)) {  // this recognises if the points are off screen and respawns them inside of the canvas at a random location
      p.x = random(width + 100);
      p.y = random(height / 1.5);
    }
    function onScreen(v) { // applys a 
      return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height / 1.5;


    }

    // if(cur_frac <= 26){
    //   noiseSeed(millis());
    // }
  }



  //---------------------------------------------------waves----------------------------------------------------

  stroke(50, 0, 255); // wave line
  fill(0, 10, 255, 50); // water area
  //draw a polygon out of the wave points
  beginShape();

  let xoff = 0; 
  
  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to

    
    noiseSeed(21);
    let y = getNoiseValue(x, yoff, cur_frac / 3, "wavey", height / 2.5, height / 2, 400)


    // Set the vertex
    vertex(x, y - height / 7);

    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.001; //how fast the wave is moving 
  vertex(width, height);
  vertex(0, height); // sets the box of the drawn waves
  endShape(CLOSE);
  // }

  //it's going to be hard to have yoff not change when the size of the canvis is differnet because it will be hard to get it in relation to height.

  //-----------------------------------------moon/sun--------------------------------
  let going_up = true;
  let amount_down = 0;
  if (cur_frac < 0.5) {
    going_up = true;
    amount_down = cur_frac * 2;
  }
  else {
    going_up = false;
    amount_down = (cur_frac - 0.5) * 2;
  }

  let ellipse_radius = int(0.08 * height);
  const up_y = int(0.14 * height); // how far up it goes
  const down_y = int(0.18 * height); // how far down it goes
  const up_y2 = int(0.14 * height); // how far up it goes
  const down_y2 = int(0.19 * height);
  const ease_amount_down = ease.circularInOut(amount_down);

  if (going_up) {
    cur_y = map(ease_amount_down, 0, 1, up_y, down_y);
  }
  else {
    cur_y = map(ease_amount_down, 0, 1, down_y, up_y)
  }

  if (going_up) {  // made a second map that goes down slightly further to have the outline peek out
    cur_y2 = map(ease_amount_down, 0, 1, up_y2, down_y2);
  }
  else {
    cur_y2 = map(ease_amount_down, 0, 1, down_y2, up_y2)
  }

  let ellipse_xPos = int(0.5 * width);

  stroke(50, 0, 255, 200); // outline 255, 150, 25,
  fill(255); //sun = 255, 255, 0, 255
  ellipse(ellipse_xPos, cur_y2, ellipse_radius * 1.9); // circle behind

  noStroke();
  ellipse(ellipse_xPos, cur_y, ellipse_radius * 2);

  fill(50, 0, 255, 200);
  ellipse(ellipse_xPos - height / 11, cur_y2 - width / 30, ellipse_radius * 0.45); // small behind

  fill(255);
  ellipse(ellipse_xPos - height / 11, cur_y - width / 30, ellipse_radius * 0.5);
}
