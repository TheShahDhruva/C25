class trashCan{
    constructor(x,y,height,angle){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 130, height, options);
        this.height = height;
        this.width = 150;
        Matter.Body.setAngle(this.body, angle);
        World.add(world, this.body);
    }
        display(){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            rectMode(CENTER);
            translate(pos.x, pos.y);
            rotate(angle);
            rect(0, 0, this.width, this.height);
            pop();
        }
    
}