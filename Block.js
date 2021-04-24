class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.Visiblity = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<5){
        fill(255, 0, 255);
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        }
      else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     pop();
        }
      }

      score(){
        if(this.Visiblity<0 && this.Visiblity>-1005){
          score++;
        }
      }
}