let angle = 0;

function draw_one_frame(cur_frac) {
  let sun_size = canvasHeight/1.5;
  angleMode(DEGREES);
  
  
  

  
















  
  noStroke();
  fill(100, 100, 214);
  rect(0, 0, width, height);

  fill(255, 255, 0);
  ellipse(width/2, height/2, sun_size);

  fill(0, 200, 0);
  rect(0, height/2, width, height/2);

  stroke(0);
  line(width/2, height/2, width/2, height);
  line(0.40*width, height/2, 0.20*width, height);
  line(0.60*width, height/2, 0.80*width, height);
  line(0.70*width, height/2, 1*width, height);
  line(0.80*width, height/2, 1.2*width, height);
  line(0.90*width, height/2, 1.4*width, height);
  line(0.30*width, height/2, 0*width, height);
  line(0.20*width, height/2, -0.2*width, height);
  line(0.10*width, height/2, -0.4*width, height);
  

  strokeWeight(10);
  let grid_points = [
    0.50 * height,
    0.53 * height,
    0.60 * height,
    0.75 * height,
    1.00 * height,
    1.25 * height
  ]

  if (debugView) {
    strokeWeight(1);
    stroke(255, 0, 0);
    for(let i=0; i<grid_points.length; i++) {
      line(0, grid_points[i], width, grid_points[i]);
    }
  }

  strokeWeight(2);
  stroke(0);
  for(let i=0; i<grid_points.length-1; i++) {
    let cur_grid_line = map(cur_frac, 0, 1, grid_points[i], grid_points[i+1])
    line(0, cur_grid_line, width, cur_grid_line);
    ellipse(width/3, cur_grid_line, width/10, width/10);
  }


  //star
  push();
  translate(width / 1.5, height / 2);
  rotate(angle);
  // Scale the coordinates based on the canvas dimensions
  const scale = min(width, height) / 300;
  const x = [0, 14, 47, 23, 29, 0, -29, -23, -47, -14];
  const y = [-50, -20, -15, 7, 40, 25, 40, 7, -15, -20];
  for (let i = 0; i < 10; i++) {
    x[i] *= scale;
    y[i] *= scale;
  }
  
  // Draw the star
  fill(255, 204, 0);
  noStroke();
  beginShape();
  for (let i = 0; i < 10; i++) {
    vertex(x[i], y[i]);
  }
  endShape(CLOSE);
  
  // Increase the angle for the next frame
  angle += 1;

pop();




}