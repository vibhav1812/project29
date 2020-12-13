class SlingShot {
constructor(body1,point2){
this.sling3 = loadImage("sling3.png");
var options = {
bodyA : body1,
pointB : point2,
stiffness : 0.04,
length : 10 
}

this.sling = Matter.Constraint.create(options);
World.add(world,this.sling);
console.log(this.sling)

}

display(){
    if(this.sling.bodyA){
    var pointA = this.sling.bodyA.position;
    var pointB = this.sling.pointB;
    stroke(48,22,8)
    if(pointA.x<270){
    strokeWeight(7)
    line(pointA.x-15,pointA.y,pointB.x-20,pointB.y+15)
    line(pointA.x-15,pointA.y,pointB.x+20,pointB.y+15)
    image(this.sling3,pointA.x-25,pointA.y-15,10,30);
    }

    else if(pointA.x>275){
        strokeWeight(3);
        line(pointA.x+20,pointA.y+5,pointB.x-10,pointB.y+15)
        line(pointA.x+20,pointA.y+5,pointB.x+20,pointB.y+15)
        image(this.sling3,pointA.x+20,pointA.y-10,10,30);
    }
    }

}

fly(){
    this.sling.bodyA = null;
}

}