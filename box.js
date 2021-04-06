class Box {
  constructor(x,y,width,height){
  var options = {
      restitution:0.8,
      friction:1,
      density:0.04,
  }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  World.add(world,this.body);
}
display(){
    var pos = this.body.position;
    var angles = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angles);
    rectMode(CENTER);
    fill("green");
    stroke("black")
    strokeWeight(4);
    rect (0,0,this.width,this.height);
    pop();
}
}