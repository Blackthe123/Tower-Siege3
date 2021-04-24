class Protector{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

      }
      display(){
        push();
        fill(0, 0, 255);
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
}