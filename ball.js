class ball{
    constructor(x, y, radius){
        var options = {
            isStatic:false
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
     display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        ellipseMode(RADIUS);
        translate(pos.x, pos.y);
        rotate(angle);
        ellipse(0,0,this.radius, this.radius);
        pop();
    }
}