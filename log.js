class Log{

    constructor(x,y,height,angle1){

    var options = {
        restitution : 0.3,
        density : 1,
        friction : 1

    }

        this.body = Bodies.rectangle(x, y, 20, height, options);
        World.add(world, this.body);
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.body,angle1)


    }

    display() {

        var pos = this.body.position
        var angle = this.body.angle

        push();
        translate (pos.x, pos.y)
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
        rect (0, 0, this.width, this.height);
        pop();

    }
}