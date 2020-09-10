class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 25, 25, options);
      this.width = 25;
      this.height = 25;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      push();
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      rectMode(CENTER);
      strokeWeight(3);
      stroke(255,0,0);
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };