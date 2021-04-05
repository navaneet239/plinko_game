class Plinko{

    constructor(x, y, radius){
        var options =  {
            istatic : true
        }
        
        this.body = Bodies.circle(x, y, radius, options)
        this.radius    = radius;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        fill("white");
        ellipse(pos.x, pos.y, this.radius);
    }

}