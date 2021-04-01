class Iron{
    constructor(x,y){
    var options ={
        "restitution":0.1,
        density:20
    }
 this.body=Bodies.circle(x,y,25,options);
 this.r=50
 World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
       
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS)
        strokeWeight(5);
        stroke("blue")
        fill("aqua")
        ellipse(0,0,this.r,this.r)
        pop();
    }
    }