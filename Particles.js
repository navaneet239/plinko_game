class Particles{

    constructor(x, y, radius){
        var options =  {
            'istatic' : false
        }
        
        this.body = Bodies.circle(x, y, radius, options)
        this.radius    = radius;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        fill("blue");
        translate(pos.x, pos.y)
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius);
        pop(); 
    }


}