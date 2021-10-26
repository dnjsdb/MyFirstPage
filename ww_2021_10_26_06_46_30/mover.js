
class Mover{
  constructor() {
    this.position = createVector(random(width),random(height));
    this.velocity = createVector(1);
    this.acceleration = createVector(-0.8);
    this.topspeed = -3;
  }

  update() {

    let mouse = createVector(mouseX,mouseY);
    this.acceleration = p5.Vector.sub(mouse,this.position);
    // Set magnitude of acceleration
    this.acceleration.setMag(5);

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
    
   
  }
  
  

  

  display() {
    noStroke();
    fill(r, g, b, 20);
    ellipse(this.position.x, this.position.y, 50, 50);
          

    //
    }
}  
