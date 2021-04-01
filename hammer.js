class Hammer{
    constructor(x,y){
    var options ={
        "restitution":0.6,
        density:1
    }
 this.body=Bodies.rectangle(x,y,150,50,options);
 this.width=150;
 this.height=50;
 World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        pos.x=mouseX;
        pos.y=mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("blue")
        fill("red")
        rect(0,0,this.width,this.height)
        pop();
    }
}