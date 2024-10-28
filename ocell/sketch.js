let mic;
function setup() {
  createCanvas(400, 400);
  mic=new p5.AudioIn(44);
  mic.start();
}
  
function draw() {
  let vol=mic.getLevel();
  let h=map(vol,0,1,0,300)
  background(100,220,189);
  fill(20,240,2);
  beginShape(227)
  vertex(0,320)
  vertex(84,244)
  vertex(184,44)
  vertex(204,64)
  vertex(280,97-h-h-h-h-h)//boca
  vertex(216,100)//dins
  vertex(280,103+h+h+h+h+h)//boca
  vertex(204,120)
  vertex(204,324)
  vertex(120,400)
  endShape(close);
   fill(2)
    ellipse(180,80,20-h-h,20-h-h);
     fill(255,255,0)
    ellipse(395,00,100+h+h+h+h,100+h+h+h+h)
     fill(75);
  
  
  
  
}



