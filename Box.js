class Box {
  constructor(x, y, width, height){
    var options = {
      isStatic : false,
      restitution : 0.4,
      friction : 0.5
      
  }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.width = width;
  this.height = height;
  
  World.add(world, this.body);
}
display(){
  var pos =this.body.position;
      fill("white")
      rectMode(CENTER);
      stroke(5);
      rect(pos.x, pos.y, this.width, this.height);
    
  }

};
